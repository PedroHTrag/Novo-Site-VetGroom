import { BookingFormData, ServiceItem, AddonItem } from '../types';
import { BRAND_INFO } from '../data/constants';

/**
 * Formata um valor numérico para Real brasileiro (BRL)
 */
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

/**
 * Calcula o valor total estimado do agendamento (serviço principal + adicionais selecionados)
 */
export function calculateBookingTotal(
  basePrice: number,
  selectedAddonIds: string[],
  availableAddons: AddonItem[]
): number {
  const addonsTotal = selectedAddonIds.reduce((sum, id) => {
    const found = availableAddons.find(a => a.id === id);
    return sum + (found ? found.price : 0);
  }, 0);
  return basePrice + addonsTotal;
}

/**
 * Calcula o tempo total estimado do atendimento em minutos
 */
export function calculateBookingDuration(
  baseDurationMinutes: number,
  selectedAddonIds: string[],
  availableAddons: AddonItem[]
): number {
  const addonsTime = selectedAddonIds.reduce((sum, id) => {
    const found = availableAddons.find(a => a.id === id);
    return sum + (found ? found.durationMinutes : 0);
  }, 0);
  return baseDurationMinutes + addonsTime;
}

/**
 * Gera a mensagem formatada para WhatsApp e a URL completa do wa.me
 */
export function generateWhatsAppBookingUrl(
  formData: BookingFormData,
  service?: ServiceItem,
  availableAddons: AddonItem[] = []
): { messageText: string; url: string } {
  const selectedAddonNames = formData.addons
    .map(id => availableAddons.find(a => a.id === id)?.name)
    .filter(Boolean);

  const total = calculateBookingTotal(service?.startingPrice || 0, formData.addons, availableAddons);

  const messageText = `🐾 *Novo Agendamento - VetGroom*
━━━━━━━━━━━━━━━━━━━━
*Serviço:* ${service?.name || 'Não selecionado'}
*Adicionais:* ${selectedAddonNames.length > 0 ? selectedAddonNames.join(', ') : 'Nenhum'}
*Valor Estimado:* a partir de ${formatCurrency(total)}

🐶 *Dados do Pet:*
• Nome: ${formData.petName}
• Espécie: ${formData.species === 'dog' ? 'Cachorro' : 'Gato'}
• Raça: ${formData.breed || 'Não informada / SRD'}
• Porte: ${formData.size.toUpperCase()}
• Idade: ${formData.petAge || 'Não informada'}
• Obs/Comportamento: ${formData.healthNotes || 'Nenhuma restrição'}

📅 *Data e Horário Desejado:*
• Data: ${formData.selectedDate}
• Horário: ${formData.selectedTime}

👤 *Dados do Tutor:*
• Nome: ${formData.tutorName}
• WhatsApp: ${formData.tutorPhone}
• E-mail: ${formData.tutorEmail}
━━━━━━━━━━━━━━━━━━━━
_Enviado através do site oficial VetGroom_`;

  const phoneDigits = BRAND_INFO.contact.whatsappRaw || '5511999998888';
  const encoded = encodeURIComponent(messageText);
  const url = `https://wa.me/${phoneDigits}?text=${encoded}`;

  return { messageText, url };
}

/**
 * Valida os dados de cada etapa do formulário de agendamento
 */
export function validateBookingStep(
  step: number,
  formData: Partial<BookingFormData>
): { isValid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  if (step === 1) {
    if (!formData.serviceId) {
      errors.serviceId = 'Por favor, selecione ao menos um serviço para continuar.';
    }
  }

  if (step === 2) {
    if (!formData.petName || formData.petName.trim().length < 2) {
      errors.petName = 'Informe o nome do seu pet (mínimo 2 letras).';
    }
    if (!formData.species) {
      errors.species = 'Selecione se o pet é cão ou gato.';
    }
    if (!formData.breed || formData.breed.trim().length === 0) {
      errors.breed = 'Informe a raça do pet (ou SRD).';
    }
    if (!formData.size) {
      errors.size = 'Selecione o porte do animal.';
    }
  }

  if (step === 3) {
    if (!formData.selectedDate) {
      errors.selectedDate = 'Selecione a data de preferência.';
    }
    if (!formData.selectedTime) {
      errors.selectedTime = 'Selecione um horário disponível.';
    }
  }

  if (step === 4) {
    if (!formData.tutorName || formData.tutorName.trim().length < 3) {
      errors.tutorName = 'Informe o seu nome completo.';
    }
    const phoneClean = (formData.tutorPhone || '').replace(/\D/g, '');
    if (phoneClean.length < 10) {
      errors.tutorPhone = 'Informe um WhatsApp válido com DDD.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.tutorEmail || !emailRegex.test(formData.tutorEmail)) {
      errors.tutorEmail = 'Informe um e-mail válido para confirmação.';
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Verifica se a clínica está aberta com base na hora e dia atual
 */
export function isStoreOpenNow(now: Date = new Date()): { isOpen: boolean; nextStatus: string } {
  const day = now.getDay(); // 0 = Domingo, 6 = Sábado
  const hours = now.getHours() + now.getMinutes() / 60;

  if (day === 0) {
    return { isOpen: false, nextStatus: 'Abre segunda-feira às 08:30' };
  }

  if (day >= 1 && day <= 5) {
    if (hours >= 8.5 && hours < 19) {
      return { isOpen: true, nextStatus: 'Aberto hoje até às 19:00' };
    }
    if (hours < 8.5) {
      return { isOpen: false, nextStatus: 'Abre hoje às 08:30' };
    }
    return { isOpen: false, nextStatus: 'Abre amanhã às 08:30' };
  }

  // Sábado
  if (day === 6) {
    if (hours >= 8.5 && hours < 18) {
      return { isOpen: true, nextStatus: 'Aberto hoje até às 18:00' };
    }
    return { isOpen: false, nextStatus: 'Abre segunda-feira às 08:30' };
  }

  return { isOpen: false, nextStatus: 'Consulte nossos horários' };
}

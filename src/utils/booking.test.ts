import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateBookingTotal,
  calculateBookingDuration,
  formatCurrency,
  generateWhatsAppBookingUrl,
  validateBookingStep,
  isStoreOpenNow
} from './booking';
import { AddonItem, BookingFormData, ServiceItem } from '../types';

const mockAddons: AddonItem[] = [
  { id: 'add1', name: 'Hidratação', price: 40, durationMinutes: 15, description: '' },
  { id: 'add2', name: 'Ozônio', price: 60, durationMinutes: 20, description: '' },
];

test('calculateBookingTotal adds base price and selected addons correctly', () => {
  const totalZero = calculateBookingTotal(100, [], mockAddons);
  assert.equal(totalZero, 100);

  const totalOne = calculateBookingTotal(100, ['add1'], mockAddons);
  assert.equal(totalOne, 140);

  const totalBoth = calculateBookingTotal(100, ['add1', 'add2'], mockAddons);
  assert.equal(totalBoth, 200);

  const totalUnknown = calculateBookingTotal(100, ['nonexistent'], mockAddons);
  assert.equal(totalUnknown, 100);
});

test('calculateBookingDuration sums base duration and addons duration', () => {
  const duration = calculateBookingDuration(60, ['add1', 'add2'], mockAddons);
  assert.equal(duration, 95);
});

test('formatCurrency formats values into Brazilian Real currency string', () => {
  const formatted = formatCurrency(150);
  assert.match(formatted, /150/);
  assert.match(formatted, /R\$/);
});

test('validateBookingStep checks required fields correctly per step', () => {
  // Step 1: needs serviceId
  const step1Fail = validateBookingStep(1, {});
  assert.equal(step1Fail.isValid, false);
  assert.ok(step1Fail.errors.serviceId);

  const step1Pass = validateBookingStep(1, { serviceId: 'banho-terapeutico' });
  assert.equal(step1Pass.isValid, true);

  // Step 2: pet info
  const step2Fail = validateBookingStep(2, { petName: 'A' });
  assert.equal(step2Fail.isValid, false);

  const step2Pass = validateBookingStep(2, {
    petName: 'Thor',
    species: 'dog',
    breed: 'Golden Retriever',
    size: 'grande',
  });
  assert.equal(step2Pass.isValid, true);

  // Step 4: tutor info & email regex
  const step4Fail = validateBookingStep(4, {
    tutorName: 'Jo',
    tutorPhone: '123',
    tutorEmail: 'invalid-email',
  });
  assert.equal(step4Fail.isValid, false);
  assert.ok(step4Fail.errors.tutorName);
  assert.ok(step4Fail.errors.tutorPhone);
  assert.ok(step4Fail.errors.tutorEmail);

  const step4Pass = validateBookingStep(4, {
    tutorName: 'Mariana Silva',
    tutorPhone: '11988887777',
    tutorEmail: 'mariana@example.com',
  });
  assert.equal(step4Pass.isValid, true);
});

test('generateWhatsAppBookingUrl produces valid wa.me link with encoded details', () => {
  const mockService: ServiceItem = {
    id: 's1',
    name: 'Banho Terapêutico',
    category: 'banho-tosa',
    shortDescription: '',
    fullDescription: '',
    durationMinutes: 60,
    startingPrice: 120,
    imageUrl: '',
    benefits: []
  };

  const mockForm: BookingFormData = {
    serviceId: 's1',
    addons: ['add1'],
    petName: 'Bento',
    species: 'dog',
    breed: 'Spitz Alemão',
    size: 'pequeno',
    petAge: '2 anos',
    healthNotes: 'Pele sensível',
    selectedDate: '2026-11-20',
    selectedTime: '10:00',
    tutorName: 'Lucas Ramos',
    tutorPhone: '(11) 98888-9999',
    tutorEmail: 'lucas@gmail.com'
  };

  const { messageText, url } = generateWhatsAppBookingUrl(mockForm, mockService, mockAddons);
  assert.ok(url.startsWith('https://wa.me/'));
  assert.ok(messageText.includes('Bento'));
  assert.ok(messageText.includes('Spitz Alemão'));
  assert.ok(messageText.includes('Banho Terapêutico'));
  assert.ok(messageText.includes('Hidratação'));
});

test('isStoreOpenNow returns correct status for known date hours', () => {
  // Tuesday at 11:00 (Open)
  const openTime = new Date('2026-11-17T11:00:00');
  const resultOpen = isStoreOpenNow(openTime);
  assert.equal(resultOpen.isOpen, true);

  // Sunday (Closed)
  const sunday = new Date('2026-11-15T12:00:00');
  const resultSunday = isStoreOpenNow(sunday);
  assert.equal(resultSunday.isOpen, false);
});

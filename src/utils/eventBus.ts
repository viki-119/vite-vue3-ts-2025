let eventBus: any = null;

export function setEventBus(bus: any) {
  eventBus = bus;
}

export function getEventBus() {
  return eventBus;
}

import { ServiceAvailability } from '../interfaces/ServiceAvailability';

export class MenuDto {
  service_availability: ServiceAvailability[];
  category_ids: string[];
  title: string;
  id: string;
}

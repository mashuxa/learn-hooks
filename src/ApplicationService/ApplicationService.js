import deliveryApi from 'services/api/deliveryApi/DeliveryApi';
import { deliveryTypes } from 'constants/deliveryTypes';
import { webConfiguratorProductsData } from 'constants/localStorage';

class ApplicationService {
  constructor() {
    const { verificationData } = JSON.parse(localStorage.getItem(webConfiguratorProductsData));

    this.verificationData = verificationData;
  }

  static getEncodedDelivery(data, deliveryCleanAddress) {
    const { comment, deliveryDate, deliveryTime } = data;
    const [fromTime, toTime] = deliveryTime.split(' - ');

    return {
      address: deliveryCleanAddress.result,
      comment,
      date: deliveryDate,
      fromTime,
      latitude: deliveryCleanAddress.geo_lat,
      longitude: deliveryCleanAddress.geo_lon,
      toTime,
    };
  }

  async sendApplication({ deliveryCleanAddress, selectedDeliveryType }, data) {
    if (selectedDeliveryType === deliveryTypes.delivery) {
      const delivery = ApplicationService.getEncodedDelivery(data, deliveryCleanAddress);

      await deliveryApi.sendDelivery(this.verificationData, delivery);
    } else {
      await deliveryApi.sendDeliveryToBankBranch(data.bankBranch, this.verificationData);
    }
  }
}

export default ApplicationService;

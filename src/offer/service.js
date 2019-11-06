import api from '../common/api';
import normalizeDataList from '../common/normalize-data-list';

const OfferService = {
  getOffers() {
    return new Promise((resolve, reject) => {
      api.get('/offers')
        .then(response => normalizeDataList(response.data, 'offers'))
        .then(resolve)
        .catch(reject);
    });
  }
};

export default OfferService;

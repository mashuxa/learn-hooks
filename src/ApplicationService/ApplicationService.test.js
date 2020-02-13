import React from 'react';
import renderer from 'react-test-renderer';
import AuthorizationService from './ApplicationService';

it('Encoded data should be correct', () => {
  const data = {
    comment: 'Some text here',
    deliveryDate: '24.01.2021',
    deliveryTime: '10:20 - 12:20'
  };

  const deliveryCleanAddress = {
    geo_lat: '53.9',
    geo_lon: '27.56667',
    result: 'Some expected result',
  };

  const expected = {
    address: 'Some expected result',
    comment: 'Some text here',
    date: '24.01.2021',
    fromTime: '10:20',
    latitude: '53.9',
    longitude: '27.56667',
    toTime: '12:20',
  };

  const received = AuthorizationService.getEncodedDelivery(data, deliveryCleanAddress);

  expect(received).toEqual(expected);
});



it('Fetch data should be correct', async () => {
    const data = await AuthorizationService.prototype.sendApplication;

    expect(data).toBe({});
  });

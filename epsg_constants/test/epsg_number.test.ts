import {EpsgNumber} from '../src/epsg_number';

test('some EPSG constants', () => {
  expect(
    EpsgNumber.WORLD__WGS_84__4326
  ).toEqual(
    4326
  );

  expect(
    EpsgNumber.SWEDEN__SWEREF99_TM__3006
  ).toEqual(
    3006
  );

  expect(
    EpsgNumber.SWEDEN__12_00__SWEREF99_12_00__3007
  ).toEqual(
    3007
  );
});
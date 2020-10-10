import React from 'react';
import {genValue,arrangeData} from '../components/Canvas';


describe("UnitTest genValue", () => {
  test("length of output must equal 32", () => {
    const colorValue = genValue(8);
    expect(colorValue.length).toBe(32);
  });

  test("first value equal step", () => {
    const colorValue = genValue(8);
    expect(colorValue[0]).toBe(8);
  });

  test("last value equal 256", () => {
    const colorValue = genValue(8);
    expect(colorValue[31]).toBe(256);
  });

  test("no duplicate value", () => {
    const colorValue = genValue(8);
    const setValue = new Set(colorValue);
    expect(setValue.size).toBe(32);
  });
});

describe("UnitTest arrangeData", () => {
  test("length of output must equal 32768", () => {
    const red = genValue(8);
    const green = [...red];
    const blue = [...red];
    const size=[256,128]
    const renderValue = arrangeData(red,green,blue,size);
    expect(renderValue.length).toBe(32768);
  });

  test("no duplicate value", () => {
    const red = genValue(8);
    const green = [...red];
    const blue = [...red];
    const size=[256,128]
    const renderValue = arrangeData(red,green,blue,size);
    const setValue = new Set(renderValue);
    expect(setValue.size).toBe(32768);
  });

});

import { render } from "@testing-library/react";
import sum from "./sum";


test("testing for sum function 1", () => {
    // expect(input).toBe(output);
    expect(sum(10, 10)).toBe(20);
}, 1000);



test("testing for sum function 2", () => {
    let a = 10;
    let b = 20;
    let output = 30;
    expect(sum(a, b)).toBe(output);
}, 1000)
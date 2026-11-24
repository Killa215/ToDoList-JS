import {describe, it, expect} from "vitest"
import {isValidTitle} from "./isValidTitle.js"

describe("isValidTitle", ()=>{
  it('должна принимать обычную строку', ()=>{
    expect(isValidTitle('Hello')).toBe(true)
  })
  it('должна отклонять пустую строку', ()=>{
    expect(isValidTitle('')).toBe(false)
  })
  it('должна отклонять строку из пробелов', ()=>{
    expect(isValidTitle(' ')).toBe(false)
  })
  it('должна отклонять число 123', ()=>{
    expect(isValidTitle(123)).toBe(false)
  })
  it('должна отклонять null', ()=>{
    expect(isValidTitle(null)).toBe(false)
  })
  it('должна отклонять undefined', ()=>{
    expect(isValidTitle(undefined)).toBe(false)
  })
  it('должна принимать " Hello "', ()=>{
    expect(isValidTitle(" Hello ")).toBe(true)
  })
  it('должна отклонять пустой массив', ()=>{
    expect(isValidTitle([])).toBe(false)
  })
})
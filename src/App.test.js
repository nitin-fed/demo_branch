import React from 'react'
import { App, Add } from './App'

describe('App Should Render', () => {
  it('should render app', () => {
    
  })

  it('shoudl return add', () => {
    const a = Add(3,2);
    expect(a).toBe(5)
  })
})
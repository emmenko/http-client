import expect from 'expect'
import { parseJSON } from '../index'

const echoJSON = (json) =>
  () =>
    Promise.resolve({ json: () => Promise.resolve(json) })

describe('parseJSON', () => {
  describe('by default', () => {
    it('sets the jsonData property of the response', () =>
      parseJSON()(echoJSON({ hello: 'world' })).then(response =>
        expect(response.jsonData).toEqual({ hello: 'world' })
      )
    )
  })

  describe('when a "custom" property name is provided', () => {
    it('sets the "custom" property of the response', () =>
      parseJSON('custom')(echoJSON({ hello: 'world' })).then(response =>
        expect(response.custom).toEqual({ hello: 'world' })
      )
    )
  })
})

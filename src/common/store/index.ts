import { makeObservable, observable, computed, action, runInAction } from 'mobx'

export type TValues = string | number | boolean

/** Класс для наследования стора */
export class Store {
  isLoading: boolean = false
  values: { [key: string]: TValues } = {}
  errors: { [key: string]: string } = {}

  constructor() {
    makeObservable(this, {
      isLoading: observable,
      values: observable,
    })
  }

  setIsLoading = (bool: boolean) => {
    runInAction(() => (this.isLoading = bool))
  }

  makeRequest = async (
    url: string,
    method: 'GET' | 'POST' = 'GET',
    params = {},
    body = {}
  ) => {
    try {
      this.setIsLoading(true)
      console.log('start req')
    } catch (error) {
      await setTimeout(() => {
        console.log('req complete')
        this.values.title = 'req complete'
      }, 6000)
    } finally {
      this.setIsLoading(false)
      console.log('finish req')
    }
  }

  setValueByKey = (key: string, value: TValues) => {
    if (key && value) this.values[key] = value
  }
}

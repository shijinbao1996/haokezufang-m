import storage from './storage'

const TOKEN_KEY = 'HAOKE_ZUFANG_TOKEN'

export const getToken = () => storage.get(TOKEN_KEY)

export const setToken = (token) => storage.set(TOKEN_KEY, token)

export const removeToken = () => storage.remove(TOKEN_KEY)

import BurgerRankingError from 'server/domain/BurgerRankingError'

export class AlreadyExistError extends Error implements BurgerRankingError {
  public readonly code = '409'
  constructor () {
    super('Already exist')
  }
}

import type { UserData } from './userData'

describe('Register user on mailing list use case', async () => {
  it('should add user with complete data to mailing list', async () => {
    const users: UserData[] = []
    const repository: UserRepository =
      new InMemoryUserRepository(users)

    const useCase: RegisterUserOnMailingList =
      new RegisterUserOnMailingList(repository)

    const userMock: UserData = {
      name: 'John Doe',
      email: 'johndoe@example.com'
    }

    await useCase.registerUserOnMailingList(userMock)
    const userExists = repository.findUserByEmail(userMock.email)

    expect(await userExists.name).toBe(userMock.name)
    expect(await userExists.email).toBe(userMock.email)
  })
})

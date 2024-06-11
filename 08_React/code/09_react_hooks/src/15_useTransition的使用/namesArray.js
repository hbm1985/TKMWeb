import { faker } from "@faker-js/faker"

const namesArray = []

for (let i = 0; i < 10000; i++) {
  const randomName = faker.person.fullName()
  namesArray.push(randomName)
}

export default namesArray
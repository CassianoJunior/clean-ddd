/* eslint-disable @typescript-eslint/no-empty-function */

import { expect, test } from 'vitest'
import { Answer } from '../entities/answer'
import { AnswersRepository } from '../repositories/answers-repository'
import { AnswerQuestionUseCase } from './answer-question'

const fakeAnswerRepository: AnswersRepository = {
  create: async (answer: Answer) => {},
}

test('create an answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswerRepository)

  const answer = await answerQuestion.execute({
    instructorId: '1',
    questionId: '2',
    content: 'Answer content',
  })

  expect(answer.content).toEqual('Answer content')
})

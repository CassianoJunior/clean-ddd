import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Answer } from '@/domain/entities/answer'
import { AnswersRepository } from '@/domain/repositories/answers-repository'

interface AnswerQuestionUseCaseRequest {
  questionId: string
  instructorId: string
  content: string
}

export class AnswerQuestionUseCase {
  constructor(private repository: AnswersRepository) {}

  async execute({
    instructorId,
    questionId,
    content,
  }: AnswerQuestionUseCaseRequest) {
    const answer = Answer.create({
      content,
      authorId: new UniqueEntityId(instructorId),
      questionId: new UniqueEntityId(questionId),
    })

    await this.repository.create(answer)

    return answer
  }
}

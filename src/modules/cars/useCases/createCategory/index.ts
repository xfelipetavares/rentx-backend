import { RAMCategoriesRepository } from "../../repositories/RAMCategoriesRepository"
import { CreateCategoryController } from "./CreateCategoryController"
import { CreateCategoryUseCase } from "./CreateCategoryUseCase"

const categoriesRepository = RAMCategoriesRepository.getInstance()
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository)
const createCategoryController = new CreateCategoryController(createCategoryUseCase)

export { createCategoryController }

import { Example } from "../entities/Example";
import { Resolver, Query, Mutation, Arg } from "type-graphql";

@Resolver()
export class ExampleResolver {
  @Query(() => [Example], { name: "examples" })
  async examples(): Promise<Example[]> {
    const examples = await Example.find();
    return examples;
  }

  @Mutation(() => Example, { name: "createExample" })
  async createExample(
    @Arg("exampleName") exampleName: string
  ): Promise<Example> {
    const newExample = await Example.create({
      exampleName,
    }).save();
    return newExample;
  }
}

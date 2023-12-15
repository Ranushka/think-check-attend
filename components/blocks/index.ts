import Title, { titleSchema } from './Title'
import Hero, { heroSchema } from './Hero'
import QnA, { qnaSchema } from './QnA'
import LocationsList, { locationsListSchema } from './LocationsList'
import WizardSteps, { WizardStepsSchema } from './WizardSteps'
import OurMission, { OurMissionSchema } from './OurMission'
import OurApproch, { OurApprochSchema } from './OurApproch'
import ThinkCheckSubmit, { ThinkCheckSubmitSchema } from './ThinkCheckSubmit'
import RichText, { RichTextSchema } from './RichText'
import Intro, { IntroSchema } from './Intro'
import KeepInMind, { KeepInMindSchema } from './KeepInMind'
import CheckerQuestion, { CheckerQuestionSchema } from './CheckerQuestion'

const blockComponents = {
  Title,
  Hero,
  QnA,
  LocationsList,
  WizardSteps,
  OurMission,
  OurApproch,
  ThinkCheckSubmit,
  RichText,
  Intro,
  KeepInMind,
  CheckerQuestion,
}

const blockSchemas: any = [
  titleSchema,
  heroSchema,
  qnaSchema,
  locationsListSchema,
  WizardStepsSchema,
  ThinkCheckSubmitSchema,
  OurApprochSchema,
  OurMissionSchema,
  RichTextSchema,
  IntroSchema,
  KeepInMindSchema,
  CheckerQuestionSchema,
]

export { blockComponents, blockSchemas }

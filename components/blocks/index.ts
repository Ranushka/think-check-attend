import Title, { titleSchema } from './Title'
import Hero, { heroSchema } from './Hero'
import QnA, { qnaSchema } from './QnA'
import LocationsList, { locationsListSchema } from './LocationsList'
import WizardSteps, { WizardStepsSchema } from './WizardSteps'
import OurMission, { OurMissionSchema } from './OurMission'
import OurApproch, { OurApprochSchema } from './OurApproch'
import ThinkCheckSubmit, { ThinkCheckSubmitSchema } from './ThinkCheckSubmit'

const blockComponents = {
  Title,
  Hero,
  QnA,
  LocationsList,
  WizardSteps,
  OurMission,
  OurApproch,
  ThinkCheckSubmit,
}

const blockSchemas = [
  titleSchema,
  heroSchema,
  qnaSchema,
  locationsListSchema,
  WizardStepsSchema,
  ThinkCheckSubmitSchema,
  OurApprochSchema,
  OurMissionSchema,
]

export { blockComponents, blockSchemas }

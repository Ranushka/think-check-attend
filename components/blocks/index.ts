import Title, { titleSchema } from './Title'
import Hero, { heroSchema } from './Hero'
import QnA, { qnaSchema } from './QnA'
import LocationsList, { locationsListSchema } from './LocationsList'
import AboutPage, { AboutPageSchema } from './AboutPage'
import OurMission, { OurMissionSchema } from './OurMission'
import OurApproch, { OurApprochSchema } from './OurApproch'
import ThinkCheckSubmit, { ThinkCheckSubmitSchema } from './ThinkCheckSubmit'

const blockComponents = {
  Title,
  Hero,
  QnA,
  LocationsList,
  AboutPage,
  OurMission,
  OurApproch,
  ThinkCheckSubmit,
}

const blockSchemas = [
  titleSchema,
  heroSchema,
  qnaSchema,
  locationsListSchema,
  AboutPageSchema,
  ThinkCheckSubmitSchema,
  OurApprochSchema,
  OurMissionSchema,
]

export { blockComponents, blockSchemas }

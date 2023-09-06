const stats = [
  {
    label: 'Conferences were held around the world last year',
    value: '1.2 million',
  },
  {
    label: 'Attendees participated in these conferences',
    value: '23 million',
  },
  {
    label: 'Reported cases of predatory conferences around the world',
    value: '16,000',
  },
]

export default function OurMission() {
  return (
    <div className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Our mission
          </h2>
          <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
            <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
              <p className="text-xl leading-8 text-gray-600">
                Think. Check. Attend. is an initiative that aims to guide and
                assist researchers and scholars to judge the legitimacy and
                academic credentials of conferences in order to help them decide
                whether to or not attend the same. Nowadays, the scholarly
                community faces an increasing number of invitations to present
                at or attend conferences. Some of these are respectable,
                academic events, while others are misleading, exaggerated or
                even fake.
              </p>
              <p className="mt-10 max-w-xl text-base leading-7 text-gray-700">
                Think. Check. Attend. provides guidelines that help researchers
                to differentiate between an authentic conference and the one
                they should avoid. In this initiative, we help scholars to
                recognise the characteristics of a trusted conference to attend
                and submit their abstracts through a number of steps and a check
                list. Simply follow these steps and you will rest assured that
                you attend only the most appropriate conferences.
              </p>
            </div>
            <div className="lg:flex lg:flex-auto lg:justify-center">
              <dl className="w-64 space-y-8 xl:w-80">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col-reverse gap-y-1"
                  >
                    <dt className="text-sm text-gray-600">{stat.label}</dt>
                    <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

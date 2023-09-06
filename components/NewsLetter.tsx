import NewsLetterBg from './NewsLetterBg'
import NewsLetterPreference from './NewsLetterPreference'

export default function NewsLetter() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
          <div className="relative z-20">
            <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Get notified Conference Insights relate to your field.
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-center text-lg leading-8 text-gray-300">
              Rest Assured, No Spam! Our Newsletter Offers Valuable Insights and
              Information to Empower Your Conference Choices.
            </p>
            <form className="mx-auto mt-10 max-w-md ">
              <div className="flex gap-x-4">
                <input
                  id="email-address"
                  name="firstName"
                  type="email"
                  autoComplete="firstName"
                  required
                  className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                  placeholder="First Name"
                />
                <input
                  id="email-address"
                  name="lastName"
                  type="text"
                  autoComplete="lastName"
                  required
                  className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                  placeholder="Last Name"
                />
              </div>
              <div className="block mb-5">
                <NewsLetterPreference />
              </div>

              <div className="flex gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Notify me
                </button>
              </div>
              <div>
                <small className="text-xs leading-1 block text-gray-300 pt-10">
                  You can unsubscribe at any time by clicking the link in the
                  footer of our emails. For information about our privacy
                  practices, please check our privacy policy.
                </small>
              </div>
            </form>
          </div>
          <NewsLetterBg />
        </div>
      </div>
    </div>
  )
}

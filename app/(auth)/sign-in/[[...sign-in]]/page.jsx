import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src="/login.jpg"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <a className="block text-white" href="#">
              <span className="sr-only">Home</span>
              <svg
                id="Layer_1"
                className="h-8 min-h-32"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 330.05 461.16"
              >
                <path
                  d="M349,460c-23.18-5.77-46-7.4-69.42-6.44-2.09,8.29-5.77,15.8-12.79,21.15-11.32,8.62-23.73,10.39-36.59,4.32-13.06-6.17-19.66-17.09-20.08-31.46-.31-10.28-.06-20.58-.06-31.44-9.1,0-17.71.05-26.33,0-22.74-.17-41.82-8.45-56.54-26a53,53,0,0,1-7.76-11.57c-1.82-3.93-4.27-4.82-8.16-4.61-8.58.46-16.57-1.15-23-7.52a26.37,26.37,0,0,1-8.2-19.19c-.08-14.5-.14-29,0-43.5.15-14.84,11.41-26.08,26.26-26.5,9.5-.27,9.22-.39,12.88-9.2,20.12-48.45,55.69-78,107.88-85.64,62.54-9.11,122.25,27.43,144.15,87.05,3.2,8.71,3.2,8.71,13.52,7.18v-5.2c0-14.84,0-29.67,0-44.5,0-2.41-.5-5.55,3.25-5.57s3.73,3.12,3.74,5.8c0,15.5.08,31-.05,46.5,0,3.12.62,5,3.73,6.59,9.61,4.89,14.34,13.17,14.48,23.85.18,13.67.06,27.33,0,41,0,17.22-10.48,28.67-27.57,28.76-6.87,0-10.22,2.17-13.83,8-14.13,22.92-35.42,33.84-62.18,34.3-8.62.15-17.25,0-26.14,0v30.16c2.16,0,4.4,0,6.65,0a245.36,245.36,0,0,1,84.88,12.95c13,4.44,17.22,12.24,13.35,25.34Q367.22,545.32,349.24,606c-4.81,16.31-15.49,26.08-32.11,29-25.94,4.55-52.08,7.55-78.45,7.21a341.17,341.17,0,0,1-69.35-7.71c-13.73-3-23.24-11.7-27.32-25.1-12.85-42.25-25.36-84.6-37.82-127-3-10.14,1.63-18.59,11.63-22.17A237.77,237.77,0,0,1,195,446.41c2.66,0,5.57.06,5.59,3.35,0,3.61-3.08,3.66-5.88,3.66A233.16,233.16,0,0,0,142,459.76c-.23.43-.58.79-.5,1,5.46,14.08,10.56,28.33,16.67,42.12,1.87,4.24,6,8.06,10,10.67,10.3,6.71,21.11,12.64,31.72,18.89.86.5,2.08.81,2.5,1.57a31.49,31.49,0,0,1,1.84,4.92c-1.74.36-4,1.61-5.14.94-13.12-7.54-26.4-14.87-38.87-23.4-4.45-3-7.7-8.76-10-13.93-5.76-13.21-10.66-26.79-16.19-41-6.36,2.19-12.6,3.89-18.43,6.5-4.94,2.21-6.22,7.41-4.31,13.86q7.83,26.5,15.74,53Q137.48,570,147.9,605.08c3.81,12.87,12.37,20.46,26.09,23.45,1.37-7.44,2.73-14.72,4-22,1.08-6,2-12.14,3.17-18.17,1.7-8.64,8.64-15.05,16.8-15.16,1.63,0,3.29,1.82,4.94,2.8-1.24,1.28-2.32,3.42-3.75,3.68-7.14,1.27-10.39,5.45-11.48,12.44-1.92,12.29-4.36,24.5-6.69,37.34,42.73,8,85.13,7,127.87-.43-2.38-13.45-4.56-26.7-7.12-39.87-1-4.94-4.25-8.14-9.48-9-2.41-.41-5.58-.59-5.07-4.12.53-3.78,3.67-3.1,6.33-2.72,8,1.15,13.86,7.2,15.45,16.09,2.07,11.62,4.07,23.25,6.13,34.86a25.93,25.93,0,0,0,1,3.2C327.43,627,338.26,618,342,605.64c5.92-19.54,11.63-39.15,17.42-58.73q9.46-32,18.93-64c2.84-9.61.71-13.74-8.87-17-4.36-1.47-8.79-2.74-13.53-4.2-5.08,13-10.21,25.4-14.77,38-3.51,9.72-9.42,16.9-18.56,21.83-9.8,5.3-19.27,11.2-28.89,16.84-.57.34-1.14,1-1.71,1-2,0-4.08-.26-6.12-.41.84-1.84,1.17-4.48,2.59-5.38,8.44-5.32,16.88-10.76,25.81-15.14,11.54-5.65,18.6-14.27,22.46-26.44C340.14,481.3,344.76,471,349,460ZM202.85,195.6a6.67,6.67,0,0,0-1.38.1c-43.83,17.33-71.89,48.78-81,95-3.48,17.74-2.71,36.46-2.55,54.72.33,35.73,28.28,63.32,64.1,63.59q63,.46,126,0c31.54-.19,57.84-21.71,62.9-52.74,2.22-13.66,1.13-27.88,1.31-41.85a113.74,113.74,0,0,0-10.68-50.33c-20.55-43.8-55-69.15-103-75.38a112.5,112.5,0,0,0-49.17,4.47c2.4,10.61,4.25,21.23,7.34,31.48,1.78,5.91,7.44,8.34,13.54,8.45,9.83.16,19.67.21,29.49,0,8.31-.19,13.55-4.9,15.27-13.08.86-4.07,1.35-8.25,2.66-12.16.5-1.49,2.82-2.37,4.32-3.53.77,1.59,2.29,3.24,2.16,4.76-.32,4-1.38,7.84-2.14,11.76-2.37,12.12-10.72,19.19-23,19.31q-14,.15-28,0c-12.27-.12-20.61-7.25-23-19.36C206.35,212.4,204.57,204,202.85,195.6Zm14.23,220.73c0,10,0,19.46,0,28.92a41.53,41.53,0,0,0,.14,5c1.61,13,10.82,22.9,23.59,24.9,7.76,1.22,14.88-.59,22.06-6.41-13.22.49-23-3.72-29.92-13.69-4.29-6.15-5.49-13.06-5.43-20.35.06-6.06,0-12.13,0-18.36ZM111.22,301.2c.94-5.74,1.82-11.08,2.7-16.42-17.81-2.87-30.66,9.61-26,25.12C94.07,303.09,101.25,299,111.22,301.2Zm291.23,9.1c2.53-18-10.16-29.82-26.3-25.22.91,5.33,1.82,10.66,2.74,16.1C388.71,299.07,396,303,402.45,310.3Z"
                  transform="translate(-80.01 -181.04)"
                  fill="currentColor"
                />
                <path
                  d="M280.36,564.23a35.34,35.34,0,1,1-70.66-1.45c.51-20,16.42-34.92,36.82-34.44C265.54,528.79,280.78,545,280.36,564.23Z"
                  transform="translate(-80.01 -181.04)"
                  fill="currentColor"
                />
                <path
                  d="M245.05,282.22c23.65,0,47.3,0,70.95,0,15.76,0,25,9.39,25,25.24q0,17.73,0,35.47c0,16.85-9.33,26.17-26.32,26.19q-45.48.08-90.94,0c-16.15,0-32.31,0-48.46,0-17-.06-26.25-9.34-26.25-26.26,0-12.32-.05-24.65,0-37,.07-13.77,9.7-23.58,23.55-23.65C196.75,282.13,220.9,282.22,245.05,282.22Zm53.79,32.69c-5.55,2.67-10.66,4.81-15.38,7.6-1.19.7-2.08,4-1.45,5.23,1.45,2.9,3.75,1.44,5.8,0,8.13-5.82,13.82-5.63,22.35,0,1.34.89,3.71.23,5.6.29-.46-1.89-.31-4.79-1.48-5.49C309.57,319.75,304.45,317.61,298.84,314.91Zm-107.62-.05c-5.66,2.78-10.88,5.05-15.72,8-1,.63-.65,3.59-.93,5.48,1.77-.1,4,.44,5.23-.41,8.78-5.9,13.84-5.91,22.84-.12,1.33.86,3.66.16,5.52.18-.46-1.84-.33-4.65-1.48-5.34C202,319.79,196.88,317.62,191.22,314.86Z"
                  transform="translate(-80.01 -181.04)"
                  fill="currentColor"
                />
              </svg>
            </a>

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              AI-Powered Verification for a Brighter Future
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              Introducing our cutting-edge AI interview platform, designed to
              streamline the verification process for job applications and
              exams. Our advanced AI technology assesses your skills, knowledge,
              and potential, providing a comprehensive evaluation that can boost
              your career prospects.
            </p>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <a
                className="inline-flex size-16 items-center justify-center rounded-full bg-white text-black-600 sm:size-20"
                href="#"
              >
                <span className="sr-only">Home</span>
                <svg
                  id="Layer_1"
                  className="h-8 sm:h-10"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 330.05 461.16"
                >
                  <path
                    d="M349,460c-23.18-5.77-46-7.4-69.42-6.44-2.09,8.29-5.77,15.8-12.79,21.15-11.32,8.62-23.73,10.39-36.59,4.32-13.06-6.17-19.66-17.09-20.08-31.46-.31-10.28-.06-20.58-.06-31.44-9.1,0-17.71.05-26.33,0-22.74-.17-41.82-8.45-56.54-26a53,53,0,0,1-7.76-11.57c-1.82-3.93-4.27-4.82-8.16-4.61-8.58.46-16.57-1.15-23-7.52a26.37,26.37,0,0,1-8.2-19.19c-.08-14.5-.14-29,0-43.5.15-14.84,11.41-26.08,26.26-26.5,9.5-.27,9.22-.39,12.88-9.2,20.12-48.45,55.69-78,107.88-85.64,62.54-9.11,122.25,27.43,144.15,87.05,3.2,8.71,3.2,8.71,13.52,7.18v-5.2c0-14.84,0-29.67,0-44.5,0-2.41-.5-5.55,3.25-5.57s3.73,3.12,3.74,5.8c0,15.5.08,31-.05,46.5,0,3.12.62,5,3.73,6.59,9.61,4.89,14.34,13.17,14.48,23.85.18,13.67.06,27.33,0,41,0,17.22-10.48,28.67-27.57,28.76-6.87,0-10.22,2.17-13.83,8-14.13,22.92-35.42,33.84-62.18,34.3-8.62.15-17.25,0-26.14,0v30.16c2.16,0,4.4,0,6.65,0a245.36,245.36,0,0,1,84.88,12.95c13,4.44,17.22,12.24,13.35,25.34Q367.22,545.32,349.24,606c-4.81,16.31-15.49,26.08-32.11,29-25.94,4.55-52.08,7.55-78.45,7.21a341.17,341.17,0,0,1-69.35-7.71c-13.73-3-23.24-11.7-27.32-25.1-12.85-42.25-25.36-84.6-37.82-127-3-10.14,1.63-18.59,11.63-22.17A237.77,237.77,0,0,1,195,446.41c2.66,0,5.57.06,5.59,3.35,0,3.61-3.08,3.66-5.88,3.66A233.16,233.16,0,0,0,142,459.76c-.23.43-.58.79-.5,1,5.46,14.08,10.56,28.33,16.67,42.12,1.87,4.24,6,8.06,10,10.67,10.3,6.71,21.11,12.64,31.72,18.89.86.5,2.08.81,2.5,1.57a31.49,31.49,0,0,1,1.84,4.92c-1.74.36-4,1.61-5.14.94-13.12-7.54-26.4-14.87-38.87-23.4-4.45-3-7.7-8.76-10-13.93-5.76-13.21-10.66-26.79-16.19-41-6.36,2.19-12.6,3.89-18.43,6.5-4.94,2.21-6.22,7.41-4.31,13.86q7.83,26.5,15.74,53Q137.48,570,147.9,605.08c3.81,12.87,12.37,20.46,26.09,23.45,1.37-7.44,2.73-14.72,4-22,1.08-6,2-12.14,3.17-18.17,1.7-8.64,8.64-15.05,16.8-15.16,1.63,0,3.29,1.82,4.94,2.8-1.24,1.28-2.32,3.42-3.75,3.68-7.14,1.27-10.39,5.45-11.48,12.44-1.92,12.29-4.36,24.5-6.69,37.34,42.73,8,85.13,7,127.87-.43-2.38-13.45-4.56-26.7-7.12-39.87-1-4.94-4.25-8.14-9.48-9-2.41-.41-5.58-.59-5.07-4.12.53-3.78,3.67-3.1,6.33-2.72,8,1.15,13.86,7.2,15.45,16.09,2.07,11.62,4.07,23.25,6.13,34.86a25.93,25.93,0,0,0,1,3.2C327.43,627,338.26,618,342,605.64c5.92-19.54,11.63-39.15,17.42-58.73q9.46-32,18.93-64c2.84-9.61.71-13.74-8.87-17-4.36-1.47-8.79-2.74-13.53-4.2-5.08,13-10.21,25.4-14.77,38-3.51,9.72-9.42,16.9-18.56,21.83-9.8,5.3-19.27,11.2-28.89,16.84-.57.34-1.14,1-1.71,1-2,0-4.08-.26-6.12-.41.84-1.84,1.17-4.48,2.59-5.38,8.44-5.32,16.88-10.76,25.81-15.14,11.54-5.65,18.6-14.27,22.46-26.44C340.14,481.3,344.76,471,349,460ZM202.85,195.6a6.67,6.67,0,0,0-1.38.1c-43.83,17.33-71.89,48.78-81,95-3.48,17.74-2.71,36.46-2.55,54.72.33,35.73,28.28,63.32,64.1,63.59q63,.46,126,0c31.54-.19,57.84-21.71,62.9-52.74,2.22-13.66,1.13-27.88,1.31-41.85a113.74,113.74,0,0,0-10.68-50.33c-20.55-43.8-55-69.15-103-75.38a112.5,112.5,0,0,0-49.17,4.47c2.4,10.61,4.25,21.23,7.34,31.48,1.78,5.91,7.44,8.34,13.54,8.45,9.83.16,19.67.21,29.49,0,8.31-.19,13.55-4.9,15.27-13.08.86-4.07,1.35-8.25,2.66-12.16.5-1.49,2.82-2.37,4.32-3.53.77,1.59,2.29,3.24,2.16,4.76-.32,4-1.38,7.84-2.14,11.76-2.37,12.12-10.72,19.19-23,19.31q-14,.15-28,0c-12.27-.12-20.61-7.25-23-19.36C206.35,212.4,204.57,204,202.85,195.6Zm14.23,220.73c0,10,0,19.46,0,28.92a41.53,41.53,0,0,0,.14,5c1.61,13,10.82,22.9,23.59,24.9,7.76,1.22,14.88-.59,22.06-6.41-13.22.49-23-3.72-29.92-13.69-4.29-6.15-5.49-13.06-5.43-20.35.06-6.06,0-12.13,0-18.36ZM111.22,301.2c.94-5.74,1.82-11.08,2.7-16.42-17.81-2.87-30.66,9.61-26,25.12C94.07,303.09,101.25,299,111.22,301.2Zm291.23,9.1c2.53-18-10.16-29.82-26.3-25.22.91,5.33,1.82,10.66,2.74,16.1C388.71,299.07,396,303,402.45,310.3Z"
                    transform="translate(-80.01 -181.04)"
                    fill="currentColor"
                  />
                  <path
                    d="M280.36,564.23a35.34,35.34,0,1,1-70.66-1.45c.51-20,16.42-34.92,36.82-34.44C265.54,528.79,280.78,545,280.36,564.23Z"
                    transform="translate(-80.01 -181.04)"
                    fill="currentColor"
                  />
                  <path
                    d="M245.05,282.22c23.65,0,47.3,0,70.95,0,15.76,0,25,9.39,25,25.24q0,17.73,0,35.47c0,16.85-9.33,26.17-26.32,26.19q-45.48.08-90.94,0c-16.15,0-32.31,0-48.46,0-17-.06-26.25-9.34-26.25-26.26,0-12.32-.05-24.65,0-37,.07-13.77,9.7-23.58,23.55-23.65C196.75,282.13,220.9,282.22,245.05,282.22Zm53.79,32.69c-5.55,2.67-10.66,4.81-15.38,7.6-1.19.7-2.08,4-1.45,5.23,1.45,2.9,3.75,1.44,5.8,0,8.13-5.82,13.82-5.63,22.35,0,1.34.89,3.71.23,5.6.29-.46-1.89-.31-4.79-1.48-5.49C309.57,319.75,304.45,317.61,298.84,314.91Zm-107.62-.05c-5.66,2.78-10.88,5.05-15.72,8-1,.63-.65,3.59-.93,5.48,1.77-.1,4,.44,5.23-.41,8.78-5.9,13.84-5.91,22.84-.12,1.33.86,3.66.16,5.52.18-.46-1.84-.33-4.65-1.48-5.34C202,319.79,196.88,317.62,191.22,314.86Z"
                    transform="translate(-80.01 -181.04)"
                    fill="currentColor"
                  />
                </svg>
              </a>

              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                AI-Powered Verification for a Brighter Future
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                Introducing our cutting-edge AI interview platform, designed to
                streamline the verification process for job applications and
                exams. Our advanced AI technology assesses your skills,
                knowledge, and potential, providing a comprehensive evaluation
                that can boost your career prospects.
              </p>
            </div>
            <SignIn />
          </div>
        </main>
      </div>
    </section>
  );
}

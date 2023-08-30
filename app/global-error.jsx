"use client";
export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <main>
          <div className={`container ${error}`}>
            <div className="container flex justify-center">
              <h2>Something went wrong!</h2>
              <button
                onClick={() => reset()}
                className="btn-sml rounded-xl btn-secondary text-base-content mb-4"
              >
                Try again
              </button>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}

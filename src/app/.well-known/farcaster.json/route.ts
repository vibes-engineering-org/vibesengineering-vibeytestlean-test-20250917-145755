export async function GET() {
  return Response.json({
    accountAssociation: {
      header: "eyJmaWQiOjg2OTk5OSwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDc2ZDUwQjBFMTQ3OWE5QmEyYkQ5MzVGMUU5YTI3QzBjNjQ5QzhDMTIifQ",
      payload: "eyJkb21haW4iOiJ2aWJlc2VuZ2luZWVyaW5nLXZpYmV5dGVzdGxlYW4tdGVzdC1waWVkLnZlcmNlbC5hcHAifQ",
      signature: "MHg3MTgxZTY0ZTZjODNiOTBmM2IyMGNhNzA1NzI0YzI4MjcxZGRiNWEwOTkxNmQxODcwZjAxMWRlZjkyZDNkMWNmNmE1ZTZmYTY1Y2NlODEzODBlYTFiNTg0YjRhY2NhMDFkMTAxYzIxZThiYmIzYjIxODFkNzAxZDNlMWUyNDNlZTFj"
    },
    miniapp: {
      version: "1",
      name: "Vibes Vite Template",
      iconUrl: "https://vibes-engineering-vite-template.vercel.app/logo.png",
      homeUrl: "https://vibes-engineering-vite-template.vercel.app",
      imageUrl: "https://vibes-engineering-vite-template.vercel.app/splash.png",
      buttonTitle: "Open Vibes Template",
      splashImageUrl: "https://vibes-engineering-vite-template.vercel.app/splash.png",
      splashBackgroundColor: "#eeccff"
    }
  })
}
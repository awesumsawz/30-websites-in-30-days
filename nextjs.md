# Next JS Notes

-------------------------------------------------------------------------------

## starting a project

To get a project started:

`npx create-next-app@latest <project-name>`
typescript: yes
eslint: yes
tailwind: yes
inside src: (not sure yet on preference)
app router: yes
turbopack: (not sure on preference yet)
import ailias: (not sure on preference yet)

I am fine with npm for now but I've played with bun and heard good things about 
pnpm. I recall having an option to select which package manager to use when I 
was setting up day02 but I haven't seen it in days. I'll have to look into that 
more.

-------------------------------------------------------------------------------

## Adding Database Functionality

`npm install prisma @prisma/client`
`npm install sqlite`



-------------------------------------------------------------------------------

## Hydration Error

To ignore the hydration error, I added `suppressHydrationWarning` to the html 
tag.

```
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-base text-text min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

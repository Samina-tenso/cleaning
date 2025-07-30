export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-screen">
            <div className="h-full flex justify-center mt-8">{children}</div>
        </div>
    )
}
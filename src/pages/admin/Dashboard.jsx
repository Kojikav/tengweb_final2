export default function Dashboard() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Welcome, Admin!</h2>
      <p className="text-muted-foreground">Di sini Anda bisa mengelola konten website AutoParts Store.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
          <h3 className="font-semibold">Total Products</h3>
          <p className="text-3xl font-bold">12</p>
        </div>
      </div>
    </div>
  )
}
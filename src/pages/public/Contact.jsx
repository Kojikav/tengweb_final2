import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form className="space-y-6">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Your name" className="mt-1" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@example.com" className="mt-1" />
        </div>
        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" placeholder="How can we help you?" rows={5} className="mt-1" />
        </div>
        <Button type="submit" className="w-full md:w-auto">Send Message</Button>
      </form>
    </div>
  )
}
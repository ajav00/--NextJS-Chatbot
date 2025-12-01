
export default function ChatLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Hello Root Layout Chat</h1>
      <img src="https://www.rover.com/blog/wp-content/uploads/2019/07/maltese-puppy.jpg" alt="robot" width={200} />
    </div>
  );
}
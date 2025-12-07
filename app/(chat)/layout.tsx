import { Project } from "../models/project.model";
export default function ChatLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div
			className="flex flex-col w-full h-full align-center
    justify-center p-10"
		>
			<h1 className="self-center font-bold text-3xl my-10">Project Name</h1>
			
      <img
				className="self-center"
				src="/assets/vader-complete.png"
				alt="vader"
				height={300}
				width={450}
			/>
			<div className="self-center">
				<p className="project-description">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam soluta
					dolorem, quaerat pariatur nostrum quae. Pariatur quaerat deleniti
					incidunt, dolores voluptas fuga rerum aliquid velit vero magni odio
					accusamus vitae.
          <br />
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam soluta
					dolorem, quaerat pariatur nostrum quae. Pariatur quaerat deleniti
					incidunt, dolores voluptas fuga rerum aliquid velit vero magni odio
					accusamus vitae.
				</p>
			</div>
      <div className="content self-center">
        {children}
      </div>
		</div>
	);
}

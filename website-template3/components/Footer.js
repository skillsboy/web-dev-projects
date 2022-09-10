export default function Footer() {
	return (
		<footer className="bg-[#212d34]">
			<section>
				{/* Inner wrapper */}
				<div className="p-8 pt-[4.5rem] lg:w-[981px] lg:mx-auto">
					{/* Content */}
					<div>
						<h3 className="border-b-2 border-white/20 pb-3 mb-4">
							Lorem, ipsum dolor
						</h3>
						<p className="text-justify mb-10">
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Facere perferendis mollitia asperiores qui eum
							doloremque explicabo enim ipsum corrupti sunt.
						</p>
					</div>
					{/* Contact form + socials */}
					<div className="flex flex-col lg:flex-row">
						<form
							className="mb-10 lg:grow lg:shrink lg:mr-10"
							action="#"
						>
							<label
								className="block uppercase text-sm font-bold mb-2.5"
								htmlFor="name"
							>
								Name
							</label>
							<input
								className="p-2 block w-full mb-6 bg-transparent border-2 border-white/20 rounded"
								id="name"
								name="name"
								type="text"
							/>

							<label
								className="block uppercase text-sm font-bold mb-2.5"
								htmlFor="email"
							>
								Email
							</label>
							<input
								className="p-2 block w-full mb-6 bg-transparent border-2 border-white/20 rounded"
								type="email"
								name="email"
								id="email"
							/>

							<label
								className="block uppercase text-sm font-bold mb-2.5"
								htmlFor="message"
							>
								Message
							</label>
							<textarea
								className="p-2 block w-full mb-6 bg-transparent border-2 border-white/20 rounded"
								name="message"
								id="message"
								cols="30"
								rows="10"
							></textarea>

							<input
								className="hover:border-[#5b6ba6] hover:text-[#5b6ba6] uppercase text-sm font-bold py-2 bg-transparent border-2 border-white/20 rounded cursor-pointer w-full"
								type="submit"
								value="Submit"
							/>
						</form>

						<ul className="lg:grow lg:shrink">
							<li className="flex mb-6 lg:mb-16">
								<div className="inline-flex w-8 h-8 border-2 border-white/20 mr-3 items-center justify-center rounded-full">
									<span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											strokeWidth={2}
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
											/>
										</svg>
									</span>
								</div>
								<p>
									Lorem, ipsum. <br /> Lorem ipsum dolor sit.{" "}
									<br /> Lorem, ipsum dolor.
								</p>
							</li>
							<li className="flex mb-6 lg:mb-16">
								<div className="inline-flex w-8 h-8 border-2 border-white/20 mr-3 items-center justify-center rounded-full">
									<span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-6 w-6"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											strokeWidth={2}
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
											/>
										</svg>
									</span>
								</div>
								<p>Lorem ipsum dolor sit amet.</p>
							</li>
							<li className="flex mb-6 lg:mb-16">
								<div className="inline-flex w-8 h-8 border-2 border-white/20 mr-3 items-center justify-center rounded-full">
									<span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-6 w-6"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											strokeWidth={2}
										>
											<path d="M12 14l9-5-9-5-9 5 9 5z" />
											<path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
											/>
										</svg>
									</span>
								</div>
								<p>Lorem ipsum dolor sit amet.</p>
							</li>
							<li className="flex mb-6 lg:mb-16">
								<div className="inline-flex w-8 h-8 border-2 border-white/20 mr-3 items-center justify-center rounded-full">
									<span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-6 w-6"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											strokeWidth={2}
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
											/>
										</svg>
									</span>
								</div>
								<p>Lorem ipsum dolor sit amet.</p>
							</li>
						</ul>
					</div>
				</div>
			</section>

			<section>
				{/* Inner wrapper */}
				<div className="p-8 pt-0 lg:w-[981px] lg:mx-auto">
					<ul className="flex flex-col justify-center items-center border-t-2 border-white/20 pt-10 text-xs font-extralight sm:flex-row">
						<li className="mb-5 sm:mb-0 sm:mr-3 sm:pr-3 sm:border-r-2 sm:border-white/20">
							Lorem, ipsum dolor.
						</li>
						<li className="mb-5 sm:mb-0 sm:mr-3 sm:pr-3 sm:border-r-2 sm:border-white/20">
							Lorem, ipsum dolor.
						</li>
						<li>Lorem, ipsum.</li>
					</ul>
				</div>
			</section>
		</footer>
	);
}

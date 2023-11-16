import React from "react";
import { Container } from "react-bootstrap";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";

const AboutUs: React.FC = () => {
	return (
		<>
			<section className="section">
				<Container>
					<SectionHeader>
						<>Sobre mim</>
					</SectionHeader>
					<div className="clearfix" data-aos="fade-up" data-aos-duration="400" data-aos-delay="400" data-aos-easing="ease-out-cubic">
						<p>Com uma experiência sólida de mais de dois anos dedicados à área de Marketing e vendas, sou guiada por uma mente curiosa e focada em resultados, estou sempre em busca de elevar o nível de excelência em todos os projetos que participo. Do copywriting à materialização visual, minha gama de habilidades oferece diversas competências para atender às complexas demandas do universo de Marketing e Publicidade. Atualmente, trabalho com produção de conteúdo, desenvolvimento de newsletters, landing pages e e-mail marketing. Simultaneamente, sou capaz de traduzir essas narrativas em elementos visuais coerentes, utilizando o design gráfico e o branding, o que garante uma identidade visual sólida e reconhecível para qualquer projeto em que me envolvo.  No atual momento dei início nos estudos de programação, buscando uma mudança de carreira. Me encontro dentro do Transtorno do Espectro Autista, sem deficiência intelectual e com linguagem perfeitamente funcional.
						</p>
					</div>
					<div className="short-info" data-aos="fade-up" data-aos-duration="600" data-aos-delay="400" data-aos-easing="ease-out-cubic">
						<ul className="list-unstyled">
							<li>
								<span className="first">Nome:</span>
								<span className="second">Maria Eduarda Freitas</span>
							</li>
							<li>
								<span className="first">Idade:</span>
								<span className="second">24</span>
							</li>
							<li>
								<span className="first">Nascimento:</span>
								<span className="second">07/07/1999</span>
							</li>
							<li>
								<span className="first">Cidade:</span>
								<span className="second">Guarulhos</span>
							</li>
							<li>
								<span className="first">Formação:</span>
								<span className="second">Gradução em andamento</span>
							</li>
							<li>
								<span className="first">E-mail:</span>
								<span className="second"><a href="mailto:XXX">satiereduarda@outlook.com</a></span>
							</li>
							<li>
								<span className="first">Telefone:</span>
								<span className="second">11 99656-6013</span>
							</li>
						</ul>
					</div>
				</Container>
			</section>
		</>
	)
}

AboutUs.displayName = "About US";
export default AboutUs;
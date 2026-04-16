function Header() {
  return <h1>Portfólio da Jhayane</h1>
}

function ProjetoCard({ nome, desc }) {
  return <div style={{border: '1px solid #ccc', margin: '8px', padding: '8px'}}>
    <h3>{nome}</h3>
    <p>{desc}</p>
  </div>
}

function ListaProjetos() {
  const projetos = [
    { id: 1, nome: "Site Pessoal", desc: "Feito em HTML e CSS" },
    { id: 2, nome: "Calculadora", desc: "Feita com JavaScript" },
    { id: 3, nome: "Este Portfólio", desc: "Migrado pra React" }
  ];
  
  return <div>{projetos.map(p => <ProjetoCard key={p.id} nome={p.nome} desc={p.desc} />)}</div>
}

export default function App() {
  return <>
    <Header />
    <ListaProjetos />
  </>
}

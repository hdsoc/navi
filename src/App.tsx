import { sites } from './data/data';
import { config } from './config';

function App() {
  return (
    <div>
      <header>
        <h1>{config.title}</h1>
        <p>{config.description}</p>
      </header>
      <main>
        {sites.map((group, idx) => (
          <section key={idx}>
            <h2>{group.title}</h2>
            <ul>
              {group.items.map((item, itemIdx) => (
                <li key={itemIdx}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </main>
    </div>
  );
}

export default App;

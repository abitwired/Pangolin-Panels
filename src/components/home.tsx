import { V1Namespace } from "@kubernetes/client-node";
import { useState } from "react";

const Home = () => {
  const [namespaces, setNamespaces] = useState<V1Namespace[]>([]);

  const getNamespaces = async () => {
    const namespaces = await window.electron.getNamespaces();
    console.log(namespaces);
    setNamespaces(namespaces);
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={getNamespaces}>Get Namespaces</button>
      <ul>
        {namespaces.map((namespace) => (
          <li key={namespace.metadata.name}>{namespace.metadata.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

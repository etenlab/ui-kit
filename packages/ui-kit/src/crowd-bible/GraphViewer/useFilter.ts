import { useState } from 'react';

export function useFilter() {
  const [typesToExclude, setTypesToExclude] = useState<string[]>([]);

  const filterHandler = (name: string, isChecked: boolean) => {
    if (isChecked && !typesToExclude.includes(name)) {
      setTypesToExclude([...typesToExclude, name]);
    }
    if (!isChecked && typesToExclude.includes(name)) {
      const newTypesToExclude = typesToExclude.filter((type) => type !== name);
      setTypesToExclude(newTypesToExclude);
    }
  };

  return { typesToExclude, filterHandler };
}

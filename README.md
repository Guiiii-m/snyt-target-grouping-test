# snyt-target-grouping-test

Repo de teste para validar se SCA (`snyk monitor`), SAST (`snyk code test`) e
Secrets (`snyk secrets test`) caem no mesmo Target no Snyk quando usamos o
mesmo valor de `--remote-repo-url` nos três comandos.

Conteúdo proposital:

- `package.json` com uma dependência OSS desatualizada (`lodash@4.17.4`,
  com CVEs conhecidas de prototype pollution) para o SCA encontrar.
- `index.js` com um padrão de SQL injection (concatenação de string numa
  query) para o SAST encontrar, e uma chave de exemplo da AWS (a mesma
  `AKIAIOSFODNN7EXAMPLE` que a própria AWS usa nos exemplos oficiais da
  documentação, não é uma credencial real) para o Secrets encontrar.

## Como testar

Rode os três comandos abaixo, usando exatamente o mesmo valor de
`--remote-repo-url` (sem `https://`, só o path `usuario/repo`):

\`\`\`bash
snyk monitor --remote-repo-url="Guiiii-m/snyt-target-grouping-test" --org=<seu-org-id>

snyk code test --report --remote-repo-url="Guiiii-m/snyt-target-grouping-test" --org=<seu-org-id>

snyk secrets test --report --remote-repo-url="Guiiii-m/snyt-target-grouping-test" --org=<seu-org-id>
\`\`\`

Depois, confira no Snyk (Projects/Targets) se as três entradas caem sob o
mesmo Target ou se continuam separadas.

# Guia de Git

**Bem-vindo ao guia de Git!** Cole este texto direto no chat do Discord. Use **backticks simples** para trechos de codigo inline e **tres backticks** para blocos de codigo.

---

## Mini Historia do Git

Em abril de 2005, Linus Torvalds criou o Git para gerenciar o kernel do Linux. Antes, sistemas centralizados como CVS e Subversion eram lentos e rigidos. O Git trouxe **desempenho**, **branches leves** e **fluxo distribuido**, mudando o desenvolvimento colaborativo.

---

## Funcionalidades e Exemplos Praticos

A seguir, comandos essenciais com exemplos reais. Copie e cole no Discord:

### 1. Iniciar repositorio

```bash
# Em um diretorio novo ou existente
git init
```

Isso cria a pasta `.git` e comeca o versionamento.

### 2. Clonar projeto remoto

```bash
git clone https://github.com/usuario/projeto.git
```

Baixa todo o projeto para sua maquina.

### 3. Adicionar arquivos ao stage

```bash
# Adiciona um arquivo especifico
git add arquivo.txt

# Adiciona todas as mudancas
git add .
```

Use antes do `git commit`.

### 4. Criar commit

```bash
git commit -m "Implementa feature de login"
```

Registra as alteracoes adicionadas.

### 5. Ver status atual

```bash
git status
```

Mostra arquivos modificados, nao rastreados e staged.

### 6. Historico de commits

```bash
git log --oneline
```

Exibe lista resumida de commits.

### 7. Trabalhar com branches

```bash
# Criar branch
git branch minha-feature

# Mudar para branch
git switch minha-feature
```

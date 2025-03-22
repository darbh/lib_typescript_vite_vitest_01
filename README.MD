# Library Authering using typescript + vite + vitest
- Library authering as window.app06
- Unit Testing 
- InSource testing  

## 1. Docker Setup
## 2. Node ensensial 
## 3. Project Setup
- 3.1 New Project Setup
- OR
- 3.2 Clone this repo
## 4. CLI command to build and test

 
## 1. Docker Setup
### Creating Docker container 
 ```bash
 docker run -it --name node03 --hostname node03 -v /data:/data -p 5173:5173 ubuntu:22.04 bash

docker run -it --name node03 --hostname node03 -v /data:/data -p 5173:5173 ubuntu_22.04_2025-03-16_v03:latest bash

```
### Bellow commands are inside container 
```bash
# Adding Host OS User inside container
useradd --create-home  --shell /bin/bash hemant

# Taking Update 
apt update
apt install wget vim 
```

---

## 2. Node ensensial
### Installing NVM and node
```bash
export XDG_CONFIG_HOME=/opt
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash

# Ensure ~/.basrc for NVM_DIR as bellow 
export NVM_DIR="/opt/nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

source ~/.bashrc
nvm -v

# Update /home/hemant/.bashrc for NVM_DIR as above
su - hemant
vim ~/.bashrc # to update NVM_DIR
logoug
su - hemant
nvm -v

# Install node for root user 
nvm ls-remote
nvm install v23.10.0

# Installing pnpm
wget -qO- https://get.pnpm.io/install.sh | sh -

# Optionaly in /home/hemant/.bashrc
nvm use v23.10.0
```

### Installing pnpm 
```bash
wget -qO- https://get.pnpm.io/install.sh | env PNPM_HOME=/opt/pnpm bash -
```

### Installing typescript globaly 
```bash 
pnpm i -g typescript
```

---


## 3.1 NEW Project Setup 
### Sample Project vitest + typescript
```bash 
cd /data/repo/aushadh.co/aushadh.co_2024-06-02/public_html/vitest_typescript_lib_06_template

# Init Project
pnpm init
tsc --init
pnpm i -D  @types/node @vitest/ui typescript vite vitest
```
# Creating sample files 
```bash
# mkdir -p src/lib src/types
# echo -ne "interface Model {\n  show:()=>void,\n  hide:()=>void\n}" > src/typesModel.d.ts
``` 
 
## 3.2 Clone this repo 
### clone
> git clone git@github.com:darbh/lib_typescript_vite_vitest_01.git .

### Install dependancy from package.json
> pnpm install 

## 4. CLI command to build and test
### script.build = tsc && vite build
> pnpm run build

### scripts.dev = vite
> pnpm run dev --host 0.0.0.0
> pnpm vite --host 0.0.0.0
> ttp://127.0.0.1:5173

### Run All Tests in Watch mode
> pnpm vitest

### Run in UI Mode
> pnpm vitest --ui --api.host '0.0.0.0' --api.port 5173
> http://127.0.0.1:5173/__vitest__/


### List All tests
> vitest list
```
test/simple.test.ts > Math.sqrt()
test/simple.test.ts > Squared
test/simple.test.ts > JSON
```

### Run Single test file 
> vitest run test/simple.test.ts

### Run By Gegex match 
> vitest run -t 'JS.*N'


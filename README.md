## Project info

**URL**: https://taraai.vercel.app/

## Multi-Agent URL

**URL**: https://krishna2005.app.n8n.cloud/workflow/4svPu0AujsKsAqxJ

## How can I edit this code?

There are several ways of editing your application.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone https://github.com/krishnatejaswi2005/Tara.ai-AI-Recruiter.git

# Step 2: Navigate to the project directory.
cd Tara.ai-AI-Recruiter

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

---

## 🚀 Features

- 📄 **Resume Upload & Parsing** via frontend
- ✅ **AI-Powered Resume Screening** using Google Gemini & LangChain in n8n
- 📊 **Notion ATS Integration** to store and track applicant data
- 🧠 **Pre-Interview Preparation Page**
- 🎤 **Behavioral AI Interviews** powered by ElevenLabs Conversational Agent
- 📈 **Results Page** showing ATS score and AI evaluation
- 🔄 **Workflow Automation** using n8n with multi-stage flow

---

## 🔗 Workflow Overview

### 🔄 Workflow 1: Resume Screening

1. Candidate submits resume via the frontend.
2. Data hits `n8n` webhook (based on job code).
3. Resume is uploaded to Google Drive and parsed.
4. Gemini AI evaluates candidate fit.
5. Candidate data is stored in Notion ATS and Google Sheets.
6. Workflow ends with:
   - A `Webhook Response` to frontend ➡️ Pre-interview
   - An HTTP Request triggering **Workflow 2**

### 🎤 Workflow 2: ElevenLabs AI Interview

1. Triggered via POST to `/webhook/elevenlabs`
2. Data is passed to ElevenLabs for the conversational interview.
3. Transcript and evaluation are saved in Notion & Google Drive.
4. Final results are displayed on the frontend.

---

## 📬Contact

For issues or contributions, feel free to open a PR or contact the maintainer.

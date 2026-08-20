# Admin Panel (React) — MERN frontend template (3 team members)

3 CRUD modules — pratekala swतंत्र file dili ahe, jene karun 3 jan ekach veli,
konalahi conflict na hota, apapla module develop karu shaktat.

| Kaam           | File                          | Person  |
|----------------|--------------------------------|---------|
| Users CRUD     | `src/pages/UsersPage.jsx`      | Person 1 |
| Products CRUD  | `src/pages/ProductsPage.jsx`   | Person 2 |
| Orders CRUD    | `src/pages/OrdersPage.jsx`     | Person 3 |

Pratek file **fully self-contained** ahe — swतःची table, modal, form, Badge —
konalahi baherchya shared component var depend rahaycha garaj nahi. Fakt
`src/App.jsx` (sidebar + tab switching) sagalyani milun vaparaycha, tyat
changes karaychi garaj nahi.

Fakt UI/UX aahe — **authentication nahi**, ani save/edit/delete chi actual
API logic nahi (template only, `TODO` comments dile aahet).

## Run karaycha

```bash
npm install
npm run dev
```

Browser madhe `http://localhost:5173` open hoil.

## MERN backend la jodaycha

Pratek page file (`UsersPage.jsx` / `ProductsPage.jsx` / `OrdersPage.jsx`)
madhe khalil jagi `TODO` comments dile ahet, tithe tumcha Express API cha
call taka (axios/fetch vaprun):

- `useState(INITIAL_*)` la `useEffect` + `GET /api/<resource>` ne replace kara
- `handleSave` — ithe `POST /api/<resource>` (add) ani `PUT /api/<resource>/:id` (edit) call kara
- `handleDelete` — ithe `DELETE /api/<resource>/:id` call kara

## Folder structure

```
admin-panel-react/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx
    ├── App.jsx              <- shared shell (sidebar + tabs), sagalyani milun
    ├── index.css
    └── pages/
        ├── UsersPage.jsx     <- Person 1 fakt he file edit karel
        ├── ProductsPage.jsx  <- Person 2 fakt he file edit karel
        └── OrdersPage.jsx    <- Person 3 fakt he file edit karel
```

## Git workflow suggestion

Prattyekane apla swतंत्र branch kadha:
```bash
git checkout -b feature/users-crud      # Person 1
git checkout -b feature/products-crud   # Person 2
git checkout -b feature/orders-crud     # Person 3
```
Prattyek jan phakt swतःchya `pages/*.jsx` file madhe kaam karel, tyamule
merge conflicts jawal jawal yenar nahit.

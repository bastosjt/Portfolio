# Polices locales – Installation

## 1. Télécharger les fichiers

Allez sur **[Google Webfonts Helper](https://gwfh.mranftl.com/fonts)** et téléchargez chaque police.

### Correspondance des fichiers à obtenir

| Police      | Fichiers à télécharger                                      | Nom à donner dans `assets/fonts/`           |
|-------------|-------------------------------------------------------------|---------------------------------------------|
| Inter       | 300, 500, 800 (latin)                                       | `Inter-300.woff2`, `Inter-500.woff2`, `Inter-800.woff2` |
| Comfortaa   | 300, 500 (latin)                                            | `Comfortaa-300.woff2`, `Comfortaa-500.woff2` |
| Maven Pro   | 500 (latin)                                                 | `MavenPro-500.woff2`                        |
| Fira Code   | Regular                                                     | `FiraCode-Regular.woff2`                    |
| Sansation   | Regular                                                     | `Sansation-Regular.woff2`                   |
| Nunito Sans | Variable                                                    | `NunitoSans-Variable.woff2`                 |

## 2. Renommage

Si les noms diffèrent après téléchargement, renommez les fichiers pour qu’ils correspondent à ceux utilisés dans `fonts.css`.

## 3. Alternative : Fontsource (npm)

Si vous utilisez un outil de build (Vite, Webpack…) :

```bash
npm install @fontsource-variable/inter @fontsource/comfortaa @fontsource/maven-pro @fontsource/fira-code @fontsource/nunito-sans
```

Puis importez dans votre JS/CSS :
```js
import '@fontsource-variable/inter';
import '@fontsource/bebas-neue';
// etc.
```


# Project Les Petits Plats

## Objectif principaux
Développer un algorithme de recherche afin d'accéder rapidement à une recette correspondant à un besoin
de l’utilisateur dans les recettes déjà reçues.

----------------------------------------------------------------------------------------------------------

## Description du Project
L’utilisateur doit pouvoir filtrer les recettes selon deux axes :

    1. Une barre principale permettant de rechercher des mots ou groupes de lettres dans le titre, 
      les ingrédients ou la description.

    2. Recherche par mots clés dans les ingrédients, les ustensiles ou les appareils.

----------------------------------------------------------------------------------------------------------

## Taches à faire

    1. Planifier les 2 versions de la fonctionnalité que nous voulons tester : 
       - une version utilisant les boucles natives (ex.: while, for...)
       - une version en programmation fonctionnelle avec les méthodes de l'objet array 
         (ex.: foreach, filter, map, reduce).     
    
    2. Remplir le document d’investigation de fonctionnalité autant que nous pouvons pour bien décrire 
       les deux implémentations que nous voulons comparer.
    
    3. Faire un schéma, ou "algorigramme", pour chacune des propositions (les deux implémentations peuvent 
       avoir le même algorigramme).
    
    4. Implémenter les deux fonctionnalités en utilisant 2 branches différentes sur Git afin que nous 
       conservions bien le code séparé pour chacun.
    
    5. Tester leur performance afin de choisir le meilleur algorithme (nous pouvons tester uniquement sur 
       la recherche principale).
    
    6. Ajouter ensuite les résultats à la fiche d’investigation de fonctionnalité.

-------------------------------------------------------------------------------------------------------------

## Conditions à respecter :
    
    1. La recherche doit pouvoir se faire via le champ principal ou via les tags (ingrédients, ustensiles 
       ou appareil)
    
    2. La recherche principale se lance à partir de 3 caractères entrés par l’utilisateur dans la barre 
       de recherche

    3. La recherche s’actualise pour chaque nouveau caractère entré

    4. La recherche principale affiche les premiers résultats le plus rapidement possible
    
    5. Les champs ingrédients, ustensiles et appareil de la recherche avancée proposent seulement les éléments 
       restant dans les recettes présentes sur la page

    6. Les retours de recherche doivent être une intersection des résultats. 
       Si l’on ajoute les tags “coco” et “chocolat” dans les ingrédients, on doit récupérer les recettes qui 
       ont à la fois de la coco et du chocolat.

    7. Comme pour le reste du site, le code HTML et CSS pour l’interface (avec ou sans Bootstrap) devra passer 
       avec succès le validateur W3C.

    8. Aucune librairie ne sera utilisée pour le JavaScript du moteur de recherche

-------------------------------------------------------------------------------------------------------------

[La maquette du projet](https://www.figma.com/file/xqeE1ZKlHUWi2Efo8r73NK/UI-Design-Les-Petits-Plats-FR?node-id=1%3A2)

-------------------------------------------------------------------------------------------------------------

[Le résultat du projet](https://vsabernard.github.io/P7Les-Petits-Plats/)
    
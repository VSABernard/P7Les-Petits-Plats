# Project Les Petits Plats


L’entreprise “Les petits plats” a décidé de réaliser son propre site de recettes de cuisine.
L’un des éléments qui peuvent faire la différence sur son site est la fluidité du moteur de recherche
pourque ses utilisateurs puissent faire une recherche rapide et presque instantanée.

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

-------------------------------------------------------------------------------------------------------------

[L'algorigramme de recherche](https://viewer.diagrams.net/?tags=%7B%7D&highlight=006666&edit=_blank&layers=1&nav=1&title=Algorigramme_P7_Les-petits-plats#R%3Cmxfile%3E%3Cdiagram%20id%3D%22f9-gHb_kgUe9WOifYyFr%22%20name%3D%22Sc%C3%A9nario%20global%22%3E7V3bkps4EP0a1z5NCklcH%2BeaTVWS2cpUbvvG2LLNBCMv4Mw4X7%2BSQYCEsGUbMDPlVCUxQhKg03261WrBCF0vXt7H%2FnL%2BiUxwOILG5GWEbkYQAs%2F26H%2BsZJ2VuI6bFcziYJIVGWXBQ%2FAH5y156SqY4CQvy4pSQsI0WIqFYxJFeJwKZX4ck2ex2pSEE6Fg6c9wreBh7If10u%2FBJJ3npbZllif%2BxsFszi8N%2BBMvfF47f5Rk7k%2FIc6UI3Y7QdUxImv0ij0%2FsCaAR%2Bo90FDf1spbCSG3qLl6ucUhH%2Bi47pD%2Fy1sLZomHxFDGO0upN3TU0sLDzbfkR3H658v%2F2ksm31Wp6f5H38tsPV5jfnh3S%2Fq7miP6asV83o2s0uvQeVyk%2FRy9Sns5HIl3z8aWXpVDSg6vneZDih6U%2FZmeeqTSxftMFGwhQtKw%2BAb8dHKf4pVKUP9F7TBY4jde0Sn4WujlouSya%2BfA%2BV4A1crDmFUztvMzPZWlW9AyrCOSDuMeAQo0B%2FRjEmMnEX0G0ZINqTLLDVRqEQeKneBXrjTQVvyX7SYfQD0McklnsL2jFJY4D%2Bjg4ls%2F9U57YBc40eMFceVsCC3iWABYwjRpaSIWW2RVawFTAJYvzhLJHfkjidE5mJPLD27L0KiaraILZdQx6VNb5SMgyH70nnKbrfDT9VUo0FSEhq3iMtzwAyvnTj2c43VIvf072LFuRinHop8FvkSnbVxLzFKOMX4L0R96c%2Ff7Jfr%2Bz8qObl8qpm3V%2BMCVRek1CEm%2FuEl1fG%2FQPLU%2FSmPzClTN3d%2FmZo7FsD6O86T8kiNJSCxEStRAaknZlwpS3KpG%2BjGN%2FXam2ZBWS5usADwnXQUCyTzvq8%2FsqBS27g1LsijE5XBKRBl3fRmlMGZMyNN6o2oye8BeMLqPHZLmBXEnWcj9Fs%2ByIXc1AzM%2BhDE3NPDOybkwdIy3qj%2Bdk8bhK%2BjGylmhkoenWrayt4G0AOyNu65UTt6lJ3AAMirlV9lKW87sg5Arjs3%2BCJMUHqszGMYrxmIKANfVCgLR%2F3TANT083OvNAbQ3NiCaXbCJFj8ahnyTBWBwXcRALu1nYyp8Vi6q2m3RA43XWyLRdXpBZXANYvKBsvDkSWld81ZvjDCufZO7SNaipahVoLQWyvOxIO23x%2BTL3lmU7nT13zU7XO0JiR56evW%2FLxPLH6EIgTQdURfKdgba7c%2BygPbkamLxASV5knHXlBSFbbe77EhgdBhuybQe6hAN0Jagf4w50okGfgoQZ5Y27SgXMeCKrwjcez6mRb3Jgm2z7HMf0L3ue3340zmJNr8PWFwx9MlsPnNeuKlBXVVqfHR838Dpxvp%2FsyhfpRRAe6P6uItH%2FPaSPMYnppHJJookfpRvNRXcDnGICUbVshRtdhAGFKSbqLJJr1EakxyBV1a%2FZFaSqBaNYKOrurjjDVzngcaraV3xKCuk73YSnTEniHHd7eMpCR9bfXr3hqTsNfgGd6NfldBowGy1N543XNzV3bHhicw11HCxewkLPzKcq1Nr%2Bb0WyCmg83kSbK0VZ2%2FuvHypYZD2IvW6HiI5sKuLgh8EsYtMyisNm2YiNfzD2w8v8xCKYTDLqw0nwx3%2FcdMUAzhWQ9mtdjawb1hdlu6RcURJpKyIR62UahKFU1IIoIOSIogDrnptqatadJOj4DyKae8GmO7b68Kr0VdToprWSVvAT57bIqUegVfh1Fn%2BGqvizjN%2Fn%2B89n%2FHIcoIAfdO0afkiFn9kRfkgnkH3Gr1ib4yEg7p6blh5%2BXemfOYyJrzTkhnH8InA%2BsDsnxDxIN5AJMdIhxCFnEgEDeYKMm3WK6jeViOvc25NxW1fGnUHJuOWdARkUIEi1UnDOtsvOehKfnT7bDqmM9jnbpmaIDBE4COvOVs%2FpNuabZT5Xl%2Fm8QTGfjU4x%2FocEp5sw6ySD0m0bpIZURWSI8STIQ6lt51CaljjxgjuizvUG%2BZ11m0Wp8lRlQr6ekyAJCmbfrBWPyjjyEcvAfZIzlJFXkbOrImfQFTnzwNfbI2dPk5y5xzIUcraGNP6dEG3r1rCBzqAnqZvRFdF6YoTStHYRrdSA31m3RKvyw3YQbeZCD45HgQgsclGdR3t2cuEb5VFOj7t5tPVk88OUUdZ6O08JbFRGALxtDbpRRhucQjxa2MXUbBrYn9YTR9q3zk1i40oTZ9nlastYAEk%2BLRPtkE%2FZjIEe0jtMlV9YS%2B94IqtUjrcMMJmjZjCK%2FJpdBqOzcJalyuZ4E%2FZCN3%2FZHFZSpqkCRG93Um0aOkgdkJeobL4icTodeLM%2Bk%2FbO6mFtreb3fXQOfxuBmVPrh4M09UPOMW1PP1RwvAn90N3AyjNFBqIftjOk8W%2BOzdQd8EMc%2F%2BPx7dpp97gF4auUcjpFSz67y52DYhOkVe1uZ31%2BX0qPvf5UtriFzvVs8aka9uK15vrrpLedt6for6V7omFxFWvpPW9PMXUSrl5v8n7NlgPDAHrGvLOELEsn6XCvncxNduGQLfeHc712Vk8%2FG5lBgSqf6h%2B6kxkAKLK4Db1OrAswpNATv1CnAR5LZ9n1vJ2k%2Fe0kNbhNRTCq1%2F0kts4acDvUVL7Zo3iNx0%2FOR1ve6dE47LtTb3SzOnqiJxl84El9aNMTkoiuuMW26UleUOG33O36yHmPxV6kgjwpdYf7Gzs2WXSWWGLrpNeeASxTAqRdTiash5%2F6BVDHQTgDWMzyoPgGQtetz%2FJ6xc9RWfUzfo34SVGXkxOoo3DCug827rOqf0hGbyNSkoOmE2W01IAePYM0RSZ2pC4a%2FCqFh%2BaINhkYSM%2FZ29tFsyxbfaXGe5NbOD34dI7O8tJ5ytnBlBNaYijD4%2FmHp5pyOjru%2FVkUuhAFT3rnqFf3U%2FoVBZ1Y9FkUOhAFZIisgBRTjn5FYcucEXJ8vlSyCn4Hm4UJ9s%2BjH8eqXBxjGQfROFiyL3hU4IZ7wL2vpxviadqqn1vEzzZfArnyx79mm%2FrC2i9b%2FW1rLio6E%2FXXpUD%2BtkdBLNyuxGLL1k%2FYwBAloJwO2ImLTNMuaQXgLl%2ByZhJdfFFnreBsVEdymmMTn5wFrFnAHEsMgsL62xKUC6J8rekoCZs94encuYDY%2F%2F6BjIMLexFofclGxwTl41iTqepSKhOkBU4S9qEhSld%2FYcpbwi7y%2FS1Un5vLO5yCy2Jh8ny0PhZt11eXCfrjfXt%2Bf3%2BLPv37%2FT5BP1qTi7NrsqcFAkD8zohn9eel3nz%2BSh6mNomdTw%2Frm6%2Fk8v2PKy4Jw8j8KpfRRtVFtHe7Xo2%2FT8bYSB2VqcHaevwFGvY7eZGso7wueVuAnXsaTVETeWfRftX3ywJrure%2BssCgzvs2zjaxa5sIpZ2OZn2K1plJVBLhELYna39J6wT0BQxHcm75G1n2jh8bhrikVHyvsOXwcWFcpes08ppc3zgqX4kelh%2B9zKqX3w5Ft%2F8D%3C%2Fdiagram%3E%3Cdiagram%20id%3D%22pVMQFs_quWvSP4RLgCtF%22%20name%3D%22Axes%20de%20recherche%22%3E7V1bc5vIEv41rjzJxf3y6DhxNnu8STbZrU3ysoUlbJFgoUUovvz6w10w04NGgpkBeVyVigQIjeive%2FreZ%2Frl%2FeO72Fsv%2F4gWfnimKXdxsDjT35xpmpL%2BSw%2BsvTu%2FOKAWB7IrvgTP5UGzPLgNFv6mdV0SRWESrNsH59Fq5c%2BT1jEvjqOH9mW3UbhoHchW8WXuhT529J9gkSyLo7quNBb9mx%2FcLctvSk%2B5xZl7r7q6vHSz9BbRQ%2BOQ%2FvZMv4yjKCle3T9e%2BmH2ZNrP5Ypwtl5Z7K8Smg94fwbfFg%2Fvv18Ev3uf7pffn19%2FfT%2Bzirv88sJt%2BYvLxSZP1SPwF%2BkTKd9GcbKM7qKVF77dHX0dR9vVws%2B%2BRknf7a65jqJ1elBND%2F7wk%2BSpJKa3TaL00DK5D8uzt9EqKU%2BqRvo%2B%2FUXx09fsfudm9fZbefv8zZvH1run8l2x9mzBxGdUHtpE23heXnXhz5y3F3%2B5f%2Fzrbf803YetZ9%2FOKmx58Z1ffnR5%2FXFmxs9%2F%2Fq3%2FiJ7X8%2Bjd7fpdcV35wN%2F50b2frif9XOyHXhL8aq%2FDK7F3V19Xf%2FRTFKQr1JTH8gNuCfen8r2ttG9RrKv81I7o6YvGMnaHcijAsOj69S1YWGFSkqqFD%2Bu%2FbVSdmG1yIl6kF6jG%2BjGnSHU%2BfXVX%2Fp%2Ff6KY68ObsUj%2B7cG%2B2SXUqXfINenl6rPjq6jCK0jBMRUCGxodlkPhf1l5O3odU5LSxVv4yP078x26U4FStPmC2qeOUxHnYSQi3PLRsyAZLIcOgRcAOaoEYHCcTH8eMq43y5cPj77efI%2F2f78%2F3b994P%2F%2BlZkazJzPSUqFrkQDP1GAO0vP5qWz7gLCOUK1Nkz3Ahp9%2FP6BXkC2Brhk40h0A6QYrpBsnhHTydtJGOhlsHJDetcgupH%2F2kyD24%2FSqMNXW0jXM5%2BmzyF4ttplyFGWbyDwsRP8keMFps0K9IzdYocY9F15wTp0X%2BkpzWLXSlDYhDXRbHk61upk9XD2FwYO5%2FPztt5sPm%2B%2F%2Fe3w%2Fs81R0i17fxmFUZyvILVvsr%2F0%2BCaJo59%2B48zlZetMZRVpLbW9pbTvdPhB1XYyZtryE6aCwQRcutEGl85Ob%2B%2F6%2BXt1EM3y7jORGbY08ri6JoxWd%2F42rqQ1fkHi3YS%2Bt63vs7rZZP8t%2FPwRzlPkZVIf%2FdSZfgUcpBL%2By%2Bj%2BZrsRowRpCE01XPLXilJT8qsKK9GvQjuweBnC12wHn4yL8%2F9yHQRfveAieHj3ZXZz6Zl%2FedpMs5jwv%2Bq6527jz7Zb0DFRZYCxOHApFLVCBZtv136pr3k7Hs54PzutZMdfBSlaHrOvrOTCTgpMTn2rd31h6ps6Tqv9WB7GtQGy5kDP7%2Fv52BbCx47ZvmMhlzA%2B3qt8WgZyI8YCQdWIEoHo2Gu%2BUuY1OXcH9fk8JyzR1bdZe6vq2Me%2F3zfkRfMMracvlQFJG8NeGNyt0teZiZnKMP11JimCuRdelCfug8WiYBd%2FEzxnUqtE7Tp70PmjN1%2BfmW%2Bye6Ucsin5AQPxKlpld7kNwhA9BKjTFedWm3UvJcRF5BeghJiA%2BNKZiS%2F7pMRX%2Fu6THwfp08kgJFSmuUxkWip7zpXGn6a3EGWjdzxApnXe12iLUoevwBunl8R%2FDJIGStN338ors9c7jGZvnhpv%2BCC0pWXzRWgLOg6qfB27zToOX727Es5jQx1z%2B2yvbNPZxEtRgrvaQMhRNcPmCx1IQxMPnSOFByiSAR8d%2FCgGwcpFHHtPjQtKlY%2FswtOR4G4ZiichZs%2F16YtiBcNuaxSOvs%2F%2BfOnH2b%2FMes9seTTqoiy81abw75Wae7C6i%2F1FUIRqGmp%2F7threwYmYPPb9jlCm8pu42H1g35nVR8le1N7%2F5EzleahDiwiADce%2FDi1niKiFzF1Z1K0y7LW1As%2BtGO%2Bw6uOzdl1QuNMPULkbjeJv9oE4QnIWzREbmgcxS2sQpx8wgioeYMX6pxEZecyh41M0oYlX2V6TcGCtXJDjk2ONhJpoGatCQQxFIC%2FXGb8Nc4gxpD8pdPyF6%2Fkw85lHhTqg%2FT%2B1jZ0KsE%2FQ2nbAS4Q%2FVOhlF2TGeOM0y85JONQm%2Fl9Q3i9dPhxhjGGyMZiTEvwafbNqujHUxROketXLVGHKAHz9LGXZ1oKBKjKn0Z2k6EiSrui40q7CiV5D6FUwEY9ZGlNiCf5%2BEg0m5InixCYMKaEBCzClBc%2Fom1Cp5GU5nPOkLUGoizyHHNcyVdSAmx%2FFcc2E9FUEHZUaXX8IaqLQPxoRAIyTBmpKfTh44c%2BZWGTSBYZADeqa7VwYykWBhvDxVGjuYxQQ7ZHJGpGi5o6B0QUaiB3nUTNyFCjIda07ZrnuM7IFTdkzZ8Hbto5jRI3JN3GRXUbjkmMZHO1WzdFcAQCpVT4MaC8v1tFdJ42AlBYK6yISYOkivUidp3ZXNuVFmBXcqU25HKTm8vIhISJBhEVE8cNV9iAuTYv2R3RkYlB447oW3nZj5hka5ZHHLIK9p9IAFKtD%2FCIQMIEnbgDnxN3GrTcycuD37nMI6OYYCrNqcYwVVMFFCpWfYdgz%2BDEd8bBE%2BI6WIqC9zSxOyOFMXT9qsFiMnaGxc5MlzJ2hraFGI6KZCOnrd9kp5RC08mkpMrd2KzZcghCIG031NoaaBJCAwjBLNEbTHhDZeNqcZG1pMyMuNDbbIJ5%2Bwm2HzcLFaOuQzvbVaHtatLgOrQhRSMhNLnH1KuO9W3WoqH%2BKFRLpa0aMpB2jS5lWffBtSkWinNT6VwY%2FgHlsA9Uv2SoahaYVyCjTAyvdHU3KnlFZc4rB1VD8eEVGwVSLU0P5RWstalGmch%2FKLM4yKbg7oE%2Ber1a5bOzxb4MlJ6N3ytp2W1sOIAzm6tTEkyrkaYXaFHRmF5C3R5glQpFjhRcOtSRIdVwP3JOjSIrpQNwJ%2BaWtKA6T75JUxTW9Auww2wbMIj52mEUBvHQMV6IL19AhNcCggF8I7xVfolUpsasTNXd07rcZlxxo9MYoCPWpga2Wkl9fG02jXx7es37prfD1qCF%2BXbRWjBag9fSSHJyYIPXRPOrrNK4ZGrA6jQdLV66o5NkX%2FBx3uBqGSpJj3V0pts7Gyxjjkt7Xxse9AOmwsF7o9P0F3hBnsuDmrTwAb%2BF5azoyjnicTzad4l1qGPku1QNoxv%2B2AeqA2zhLzbvWurbdIYaKhoNIHOEq75tQvo20eGFdCT3Wpk7CjJzoOnX8jk4tg5XTgagqIPKNBeaRsPV4WWKNb1lCQadgw7dwCzR2dUWRVutkTlK2bI2spFrCtSrhKsLtZItI1Byuyw8rs1tO7AsStF1FRQ5x1p5Dur7YNg%2FGUYcjT%2BOH%2BKurjrNqkOaeNOjba9ZJRZtJoIRTdW1cyv900zXtsza6dW3AbPOyMGAcUslU4muj37XV61nKS%2FXB%2FZe6FfLD7%2Ff3%2F66Ca%2Fd2af%2FwvWb66eZCubbo3w2Yr83n%2BIJG8giIDxPXj0WO9fZpUq9Xf2KnnbtSdEEgSnZUSSa91OQ0WFvwMRbcNgbM8PKJmcSSB%2FLaAwrXd2PG1Z2FSyLiKhZahW1vjxtkpzDnXu%2F4UkpWhhni%2Frlzyv%2Fy020neciY4eZ2%2FSZQhkOuy%2BggAMtzSrYhP5t0gUaSOzgqiAkT0Lvxg9fe%2FOfd%2Fn1jUuu0r%2Bh7DvdRHRrDcNJPTS0JV8cRkCRKkBbBQAfkkapAfDa%2F7sWechGkZ2YFRL0InOqGOtHZPsgbAtvCs3gZpv02R3SHxWsNyS2bcBjAMZT0a3dwSU0q%2BpJkFzjbJ08MsYDui%2BD1%2FFqvty1yO7JAElQzlfNtWtvPi9bFOaFyHB95KjrkVUdzf%2BDYhCsuv3DAlA2DqVgKaCXL6xBakJ5auJ6yeCNmXvRUheqmND0Zc5Mi1TtT2LvzgfcEWhtuL9JZlmCteKvchN3G%2BdTVSZZRq7qVluSarQ9X1Vm5uPUWzvwEaVAC2bwOl4dmLsWOfTcopWXOQ0mP7MIU2PqjMa9aozJiGAjHaoyMt5zKHmPECXjw3sUxUfH8F66O87jYJ0E0eokWZDnmEaYBSdeXsuHBV1KFix846J4kCLB6Bge9NbrMPBW85PcBC0g6YgvBxoTt%2F%2F4cGAVddpvAAp1kBnjnHY1VWIaQolZLVPOnj5IpNpARJivSNUhwkkuBN2eFFzIa2xd5yoP6pQ6QSZCSsXrGN6%2BdBxmTNQxBpphOs5m7a3gUofmmZNKysnfl2tWh8CSgZRB6UAAmGuKjkbeSCWUJgUlk2MVDQwl2UWONYiGwI2JBnoARxdX3OjkNEEpgiYlgiyg4zFfKJE1UgmlSUHJVgVDSQWtG2mpgkkdVHUpBARwSuWhyI%2BTdSl7mLSW7x2qA7PCFJisMkZGw6TUKVq8WtB2LvPgHC002wofwn1w6hZkQuAHYmBzH2l%2Bl4XMtLOAfoec87t0mSpLw7xAE0L4QqEZXjpFs%2BGOsVl7RpKO2D2MMpZD2waHXdgaMqglX4HsQhPpFJo5YtC0thwxMfnkoNMTUxMqJCly8a5ftWShnHCmWkhPWRdITQcnnA0x8LNDJBw%2BLAHe5TrHJeC6LOepCSz2SFVxKTdJZpajQXYVYnr%2BUD35X8rcddVFylxdIMzJrCs%2FXP4ja0kotlGD1lFg8hoTCme9yOKEIYlpi83LpPD6HJPKBw8mOo08PhVqHMA5N1rmIE011GajypjoWJtJ47A46Q72OLX4dFDcddWs4q6owk3dlh6DlaYitxqoa2J6X3jNxHaO6AfqpTHtbNjRYFzmQ40nH8pFul5COfJ8paHMo5sCbhx0SjVQrsYXNzIWTmEVmbSNVE2hsfBqmb1j4Y1xqzIIjvkhNV14FBwcWiHZFuRGGrYVGgU3%2B0XBO4e2jtg%2FgfGVAZiUfIPgliz3pWEr2ripJbTS0JZB8CGJWYy2ECYjqYLgDVEoQ%2BBYCFw1oIga1xh4Ze5IB%2FDUHMA2Fo0HEiq4mq6WkBKwGxhI0uVBAA46uM0VXe5lifWwStgcBRtw7%2BKLGzkunCJ9gJD2yiswpaOblIbAgToyhZYtYTGugQJT2BepyHwuNnEmi%2BwqlIrYpBQxR%2FiGKmSWtoQSA51eB8pQ%2BGJJyMwwiSUGWDKFK2wU%2FcOhfHs4B7Aj274RLTuFNHsLaFXGN80eHK39olRtYRq0ZaNz1o%2FO7aon6da7C6OJuPg3WRYHFXpE08VfegIiDq3jMxBt1GRklYFYL5o%2BBdHWuj%2BB78I2D2MSnHrOuCyqM%2Bp9QkVR6ER7EwiS862K6pjWLFMNR%2BNAxVINVWg%2BDF%2FgUBTt7ACAjenBQ7ANZXsUQdvDtcohCK2jrnIHILQK1fmwy0%2BzKWyvHXEJFc6S4IRmnOgmPwaCU2RO4cppc5z20ltn190%2F3qWPfXl%2BG0YP86UXJ%2BfeahUlXjYy6F%2BtIa7Ledr58OtPqdDNZwrpb%2BLi1xay2Y%2Ff%2FvILEX0I%2BRZB7M%2FL%2B62ylJ%2BBCIfpmlAw1K6qjrmY2g45iA4wKml8k%2BRUglPMts%2FHJ5xVRY6ooYhlOuVD2T8kUeiM0mqZdBwMD3%2BS%2FEuwvlAdegTc61A0Jd3jzJbkBsm9s6PHRO6J9yAZjWuyr8%2FR1NGdvAp8H%2BxzxBV49FYEn%2BNQDjtn4r1QTgZUtbN5hwT93LCOxBXm%2FYXuxhpaEy8oPRlooe20esgrXA3iLa8mXpd1KqDCI1JHgwpQtniDSkgzIhnHONTbiebHCk94rKqjJHBGDRwXFTCa6OxGV2zFkgQOpdcW05yESxyyj08CZzzAwZI1xANHtoWaAHA0Ba3UFg8cihBRGOQPBLdpmvHT1B7I46dHmFFDsKSFNkGFQq4q1ydL4dCdwpN1DA2Nbboa3hgJfLYmq2dL4XyawrN1HQrUulxRS%2B6%2FIaumR7ORABkmAEvy3UjEelkkcCj3SdRYFg6c2tUokTNq5DgmlR7AGTuyN8wEsKMpqG%2FX1eqEOXHYEetskdihw46GY0c4cihSsz55WZnwomw7N2sMIwFysLjVLHFKsNINzM8BWIwaQDRmCdCqIhOsxhFb1jAn2NGxZRxnnGPLqiKkkYV0vB66iWCYEz3IQVUoOp3u2la0x1IpeVeKZn%2BK3VmkO4XPoT2FoKILAyu6cIVPjlSVcfW0uLrq3DF2u8S3xv4x1W4BmIWq1c1LD%2B8XgOTCYZJgqKYW0KrdPeX%2FunbMZ3TwBzHtGKBWYYGRsMO%2BFi8nxA6aoWIOG8c9NjUUQqnNhiOAhdffxRisR3iTshOzQsu5SC9QjfUjouIRVLerYNVHdUt%2FT7De%2BPs36yG2WgfxGmsObs5BYSp226x6RMLDSyAV6t%2FXAT2XM6XI3SCWWvXMvjxtklxfde79hj5bzHXNlvXLn1da8H2h2KaWd35Zg75BmCvLQKOY3Tdh1MFtIFpDBalQJ1pKENXxPQ3aqfKi99fe%2FOddfn3jkqv0b7hGA2jev4ZhxgC1aKc%2FaJbrIPjqBRfBw7svs5tLz%2FzL02bVAqbqqxmkcLlZj7y8%2Fjgz4%2Bc%2F%2F9Z%2FRM%2FrefTudv1uprowWXtXlLjnbuOv6vFRt7Oi7BR3xLYMg4Gm0oifCnl5yd0H1y5iBx%2BSRhhIx0fX1JFugqblnmvucaom2vPNtJAbDefSg%2BFGU4MkHG600BGGCLWNCMtRh4EDdiPWcBiXP2eqcEBS7Z0qhNYXDnXlPic4aOPyZ0wWDmjLWMM6d48sh3bQVrbZzaqm0LxgAXkOJCx6bhqqqznn1Ryf3rDIbqbrfGFBY8fsYFHalRITHQJfddGs8uMVS2axYhgMNN24xEeGVumvbPjCs7ffyu%2FL3%2BxMmfzdVNzhOI6OHRmE38mmU0kPdYTjX2SapWN8KD84DFQ56GWawzlMpAjK5Jjk0OGVoBhUj05mbSfJlVM5gNZkpB7CuWcYyZkgzq5HoMOxmRnJPdgLBQ4aPTOBoqK6NquJA4cZDijaBFPgAAVAOaxlR3lS39IaDugdanS0pwVPohMeG%2FAg3hYgbxOEzhCThGHokOuK%2BkMHofqe7pn7UfRyZEwbJvXQxCZMoP6JzGCiQ34ZmYc5sjxMtfLxVN47AxcvhovDBo0lDAYbg8a7O%2BJAY0dS%2BBmlQUYRXNK5RST7yQCKHufX7cFuO9aGZxN09s9NZcYqKT5RJOTep6wH6KnbVbby9P7FB8svUaSSUacbQGm7YPtd1WSFHTnsZgL7R53LXbv6XXwD4Wrh6tJXMlFfCZIoVyfOCUOSHIl7GkiybdEyiextkUiaEpJUnWOpMwwlIe2AJJSGh5ID6Nh8oUTryIOsM%2FIUUNJsk5Zn7xBDbfdVL9Wbtxu7u9fry8ocMyB3HuqXET5z%2BYzSxSIq5o1PJYNyYGjj3liHRf75NIZsrMx6IxpAnGBNGdgZ6enbOMqItkNZNlXyj2jhZ1f8Hw%3D%3D%3C%2Fdiagram%3E%3C%2Fmxfile%3E)
    
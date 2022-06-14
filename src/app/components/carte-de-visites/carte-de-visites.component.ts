import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-carte-de-visites',
  templateUrl: './carte-de-visites.component.html',
  styleUrls: ['./carte-de-visites.component.scss'],
})
export class CarteDeVisitesComponent implements OnInit {

  utilisateur: FormGroup = this.formBuilder.group({
    nom: ['', [Validators.minLength(2), Validators.required]],
    prenom: ['', [Validators.minLength(2), Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    entreprise: ['', [Validators.minLength(2), Validators.required]],
    telephone: ['', [Validators.minLength(10), Validators.required]],
  });

  utilisateurs: any[] = [
    {
      nom: 'Lermite',
      prenom: 'Bernard',
      email: 'bernardlermite@crustace.com',
      entreprise: 'voleurdecoquille.org',
      telephone: '6666666666',
    },
  ];
  submitted: boolean = false;

  get form() {
    return this.utilisateur.controls;
  }
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}
/**
 * Permet d'ajouter un utilisateur à nos cartes de visites
 */
  private ajoutUtilisateur(): void {
    this.utilisateurs.push(this.utilisateur.value);
    this.utilisateur.reset();
    this.submitted = false;
  }
/**
 * Permet de supprimer le dernier utilisateur entré dans notre liste de carte
 */
  private supprimeUtilisateur(): void {
    this.utilisateurs.splice(this.utilisateurs.length - 1, 1);
    this.utilisateur.reset();
  }
/**
 * permet de vérifier si on a ajouter un utilisateur au formulaire
 */
  onSubmit(): void {
    this.submitted = true;
    if (this.utilisateur.invalid) {
      console.log("Le formulaire a fait plouf!")
    } else {
      this.ajoutUtilisateur();
    }
  }
/**
 * permet de supprimer le dernier utilisateur lorsqu'on appuie sur le bouton
 */
  onDelete(): void {
    if (this.utilisateurs.length - 1 >= 0) {
      this.supprimeUtilisateur();
    } else {
      console.log("Problème lors de la suppression!")
    }
  }
}

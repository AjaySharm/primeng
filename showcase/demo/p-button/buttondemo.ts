import { Component, OnInit } from '@angular/core';
import { Button } from '../../../components/button/button';
import { ViewCard, OrderCard, PCard } from '../../../components/card/card'

@Component({
    templateUrl: 'showcase/demo/p-button/buttondemo.html',
    directives: [Button, OrderCard, PCard]
})
export class PButtonDemo { }
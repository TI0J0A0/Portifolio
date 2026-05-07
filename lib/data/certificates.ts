import type { Certificate } from '@/lib/types'

export const certificates: Certificate[] = [
  {
    id: 'oracle-oci-2024',
    title: 'Oracle Cloud Infrastructure 2024 Certified Foundations Associate',
    issuer: 'Oracle',
    date: '2024',
    imageUrl: '/certificates/oracle-oci.png',
    validationUrl: 'https://catalog-education.oracle.com/pls/certview/sharebadge',
  },
  {
    id: 'aws-cloud-discovery',
    title: 'Computação em Nuvem | AWS Discovery Day',
    issuer: 'Amazon Web Services',
    date: '2024',
    imageUrl: '/certificates/aws-discovery.png',
    validationUrl: 'https://aws.amazon.com/pt/training/awsacademy/',
  },
  {
    id: 'logica-algoritmos',
    title: 'Lógica de Programação e Algoritmos',
    issuer: 'Digital Innovation One',
    date: '2023',
    imageUrl: '/certificates/logica-algoritmos.png',
    validationUrl: 'https://www.dio.me',
  },
  {
    id: 'hack-slash',
    title: 'Hack & Slash',
    issuer: 'CTF / Cybersecurity',
    date: '2023',
    imageUrl: '/certificates/hack-slash.png',
    validationUrl: '#',
  },
]
